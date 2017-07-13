import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ControllerComponent } from './controller.component';
import { Router } from '@angular/router';


//*****************IMPORTAR FORMULARIOS PARA VALIDACION**************
import { FormGroup } from '@angular/forms';

//***********IMPORTAR SERVICIOS PARA EL CONTROLADOR*********
import { LoginService} from '../service/Login.Service';


@Component({
  selector: 'app-form-login',
  templateUrl: '../view/form-login.component.html',
  providers:[LoginService]
})
export class FormLoginComponent extends ControllerComponent implements OnInit , AfterViewInit {

        loginForm: FormGroup;

        //*******VARIABLES A UTILIZAR EN EL SISTEMA************
        txt={
                Usuario:'Usuario',
                Clave:'Clave'
        };
        

        constructor(public router: Router,public loginService:LoginService) {
              super(router); 

                //******************CREAR FORMULARIO CON VARIABLES Y AGREGAR VALIDACIONES 
                this.loginForm=this.buildForm(Object.keys(this.txt));
                this.validacion(this.txt.Usuario,true,true,true);
                this.validacion(this.txt.Clave,true,true,true);

                //*********ASIGNAR VALORES A LAS PROPIEDADES*******
                this.setValueTxt(this.txt.Usuario,"dflores");
                this.setValueTxt(this.txt.Clave,72677832);
              
          
        } 

        ngOnInit() {
             
        }

        ngAfterViewInit(){   
    
        }

        ingresar():void{
                if(this.loginForm.valid){
                
                        let parametrosJson=JSON.stringify(this.loginForm.value);
                        this.loginService.ingresar(parametrosJson)
                        .subscribe(
                                data=> {
                                        let rpta=data;
                                        if(rpta!=null){
                                                if(rpta==1){

                                                //*************INDICA SI HA FINALIZADO LA SESION O NO EN TODOS LOS CONTROLADORES***************
                                                ControllerComponent.finalizaSesion=false;
                                                
                                                //*************REDIRECCIONAR A LA VISTA PRINCIPAL***************
                                                this.router.navigate(['home']);
                                                }else{
                                                        this.mensajeInCorrecto("USUARIO INCORRECTO");
                                                }
                                        }
                                },
                               error => {
                                        let msj="ERROR: Login - ";
                                        msj+=error.statusText;
                                        this.mensajeInCorrecto(msj);
                                }
                        );             
                }else{
                        this.mensajeAdvertencia("RELLENE TODOS LOS CAMPOS");
                }
        }

}
