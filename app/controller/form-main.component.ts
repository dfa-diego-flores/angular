import { Component,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { ControllerComponent } from './controller.component';

 
@Component({
	selector: 'app-form-main',
	templateUrl: '../view/form-main.component.html'
})
export class FormMainComponent  extends ControllerComponent implements AfterViewInit{

        usuario:string;
        imagen:string;
        nombres:string;

	constructor(public router: Router) {
            super(router);           
	} 

        ngAfterViewInit(){            
                /*console.log("TIENE PERMISO: " + this.tienePermiso('FORM_MODIFICAR_DOCUMENTO','VISUALIZAR_VIEW'));
                console.log("TIENE PERMISO: " + this.tienePermiso('FORM_REGISTRAR_DOCUMENTO','VISUALIZAR_VIEW'));
                console.log("TIENE PERMISO: " + this.tienePermiso('FORM_TRANSFERENCIA_DOCUMENTO','VISUALIZAR_VIEW'));
                console.log("TIENE PERMISO: " + this.tienePermiso('FORM_TRANSFERENCIAS_DOCUMENTO','VISUALIZAR_VIEW'));
                console.log("TIENE PERMISO: " + this.tienePermiso('FORM_TRANSFERENCIA_DOCUMENTO','VISUALIZAR_VIEW22'));
                */
                //this.verificarToken(this.rutas.FORM_PRINCIPAL);

                if(!ControllerComponent.cargarScript){
                this.cargarScriptAdmin();
                console.log("CARGANDO SCRIPT");
                }else{
                        this.eliminarScriptAdmin();
                        this.cargarScriptAdmin();
                        console.log("ELIMINANDO Y CARGANDO SCRIPT");
                }                      

                let user=JSON.parse(this.obtenerDatosUsuario());
                if(user!=null){
                        console.log(user);
                        this.usuario=user.usuario;
                        this.nombres=user.nombres; 
                }
               // this.usuario=ControllerComponent.usuarioLogueado.usuario;
                //this.nombres=ControllerComponent.usuarioLogueado.empleado.nombre+" " + ControllerComponent.usuarioLogueado.empleado.apellido;

        }



        cerrarSesion(){
                localStorage.removeItem("jwt");
                localStorage.removeItem("serieDocumentos");
                localStorage.removeItem("user");
                localStorage.removeItem("permisos");
                this.navegar(" ");
        }

        


        private cargarScriptAdmin(){
                var js_script3 = document.createElement('script');
                js_script3.type = "text/javascript";
                js_script3.src = "assets/js/admin.js";
                js_script3.async = true;
                document.getElementsByTagName('head')[0].appendChild(js_script3);
                ControllerComponent.cargarScript=true;

        }


        private eliminarScriptAdmin(){
                var js= document.getElementsByTagName('head')[0];
                var js2=document.getElementsByTagName('script');

                let i=0;
                for(i=0;i<js2.length;i++){
                        var cad=js2[i].src;
                        var res = cad.split("/");
                        if(res[res.length-1]=="admin.js"){
                                //***********REMOVER SCRIPT "admin.js" PARA VOLVER A CARGARLO*********
                                js2[i].parentNode.removeChild(js2[i]);
                                break;
                        }
                }

        }

        private obtenerDatosUsuario():any{
                let user=JSON.parse(localStorage.getItem("user"));
                if(user!=null){                     
                        let us= JSON.stringify({usuario:user.usuario,nombres:user.nombres});
                        return us;
                }else{
                        user= JSON.stringify({usuario:"SIN USUARIO",nombres:"SIN NOMBRES"});
                        return user;
                }

        }
}