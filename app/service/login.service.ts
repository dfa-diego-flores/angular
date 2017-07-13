import { Injectable } from '@angular/core';
import { Http, Headers,Response} from '@angular/http';
import { Router} from '@angular/router';

//************IMPORTACION DE LIBRERIAS PARA CAPTURAR LAS EXPECIONES***********
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//*************IMPORTACION DEL SERVICIO PRINCIPAL*********
import {Service} from './service.service';


@Injectable()
export class LoginService extends Service {


  constructor(private http: Http,public router: Router) {
                super(router);
	}

        ingresar (parametrosJson) { 
               
                let opt=this.getOptionsToken();
               
                return  this.http.post(this.rutas.API_USUARIO_REST+"/login/",parametrosJson,opt)
                                .map(
                                        data=>{
                                                        let res=data.json();
                                                        if(res!=null){
                                                                
                                                                if (data.json().rpta) {
                                                                        console.log("data:" +JSON.stringify(data.json()));
                                                                        let user=data.json().usuario;
                                                                         console.log("user:" +data.json().usuario);
                                                                        //let jwt=data.json().jwt;
                                                                        let permisos=data.json().permisos;
                                                                        let vistasPermisos=data.json().vistasPermisos;

                                                                        let hashPermisos = this.obtenerPermisos(vistasPermisos,permisos);
                                                                
                                                                        localStorage.setItem("permisos",JSON.stringify(hashPermisos));
                                                                        localStorage.setItem("user",JSON.stringify(user));
        

                                                                        //************ALAMACENA EL TOKEN OTORGADO POR EL SERVIDOR************
                                                                        //localStorage.setItem("jwt",jwt);
                                                                        //console.log("jwt: "+jwt);    
                                                                }
                                                                return res.rpta;
                                                        }else{
                                                                return null;
                                                        }
                                                
                                        }  

                                );             
        }



         ingresarLogueado (creds) { 
                let headers = new Headers();
                headers.append('Content-Type', 'application/json; charset=utf-8');
               
                return  this.http.post(this.rutas.API_LOGIN_REST+"/logueado/",creds,{headers: headers})
                                .map(
                                        data=>{
                                                        let res=data.json();
                                                        if(res!=null){

                                                                //if (data.json().rpta) {
                                                                        /*console.log("user:" +JSON.stringify(data.json()));
                                                                        let user=data.json().usuario;
                                                                        let jwt=data.json().jwt;
                                                                        let permisos=data.json().permisos;
                                                                        let vistasPermisos=data.json().vistasPermisos;

                                                                        let hashPermisos1 = this.obtenerPermisos(vistasPermisos,permisos);
                                                                
                                                                        localStorage.setItem("permisos",JSON.stringify(hashPermisos1));
                                                                        localStorage.setItem("user",JSON.stringify(user));
        

                                                                        /************ALAMACENA EL TOKEN OTORGADO POR EL SERVIDOR*************/
                                                                        //localStorage.setItem("jwt",jwt);
                                                                        //console.log("jwt: "+jwt);    
                                                                //}
                                                                return res.rpta;
                                                        }else{
                                                                return null;
                                                        }
                                                
                                        }  

                                );

                        
        }


        private obtenerPermisos( vistasPermisos:any , permisos: any):any{

                let hashPermisos = {};

                /******** CREAR UN ARRAY DE ARRAYS**********************/
                let i;
                for(i=0;i<vistasPermisos.length ;i++){
                        hashPermisos[vistasPermisos[i].vista] =new Array();
                }


                /**************LLENAR EL ARRAY CON LOS PERMISOS DADOS***************/
                let antes=permisos[0].vista;
                let j=0;
                console.log("/********TAMAÑO DE PERMISOS: ***************/");
                for(i=0;i<permisos.length ;i++){
                           
                //console.log("I:"+i);
                        if(antes!=permisos[i].vista){
                                antes=permisos[i].vista;
                                j=0;
                        }
                        hashPermisos[permisos[i].vista][j] =permisos[i].componente ;
                        j++;
                }
               
                //console.log("permisos: ");
               //console.log( hashPermisos);

                return hashPermisos;
        }

}
