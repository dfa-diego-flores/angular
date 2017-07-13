import { Router } from '@angular/router';
//declare var $ =require('lib/js/jquery-1.9.1.js');

//*****************IMPORTAR FORMULARIOS PARA VALIDACION**************
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import {Rutas} from '../util/rutas-view';


declare var $:any;
export class ControllerComponent{

        protected tienePermisoView:boolean=true;
        protected item: string ="";
        protected menuItem: string ="";
        protected rutas:Rutas = new Rutas();
        
        /*****ALERTAS PARA FORMULARIO*****/
        success: boolean=false;
        msj: string;
        tipoAlerta: string;
        iconoAlerta: string;
        
       
        /*public static usuario:string;
        public static nombre:string;
        public static apellido:string;*/

    
        public static finalizaSesion:boolean=false;


        /*************VARIABLE PARA CARGAR JAVASCRIPT EN CONTROLADOR MAIN****************/
        public static cargarScript:boolean=false;



      //************OBJETOS PARA VALIDAR LOS FORMULARIOS************

      formErrors ;
      validationMessages;
     /* validaciones = {
          'required':      'Campo es requerido.',
          'minlength':     'Campo tiene que tener como minimo 4 caracteres.',
          'maxlength':     'Campo tiene que tener como maximo 24 caracteres.',
      };*/


  
      private formu:FormBuilder;  
      private formulario: FormGroup;


        constructor(protected router: Router) {
            this.success=false;
            this.msj="";
            this.tipoAlerta="";
            this.iconoAlerta="";
            this.formu= new FormBuilder();
        } 
            
        navegar(ruta : string): void {
         //$('#sidebar-menu li').addClass('active');
         //$('#sidebar-menu li ul').slideDown(); 
        // $('#sidebar-menu li').addClass('active');
         this.router.navigate([ruta]);
        }

        
        /*verificarToken():boolean{
           let rpta=false;
           let jwt=localStorage.getItem("jwt");

           if(jwt!=null){
             rpta=true;
           }
           
           return rpta;
        }*/


 

        obtenerUsuario():any{   
           let user= JSON.parse(localStorage.getItem("user"));
           if(user!=null){
             return user;
           }else{
             return null;
           }

        }
        
        verificarToken(vista: string){
           let jwt=localStorage.getItem("jwt");

           if(jwt!=null){
              //rpta=true;
              console.log("/************TIENE TOKEN VALIDO****************/");
                
                if(!this.tienePermiso(vista,this.rutas.VISUALIZAR_VIEW)){
                        this.mensajeInCorrecto("NO TIENE PERMISO PARA ESTA PANTALLA");
                        this.tienePermisoView=false;
                }
             
           }else{
              console.log("/************NO TIENE TOKEN VALIDO************/");
              this.navegar("");
           }
    
        }

        verificarTokenRpta(vista: string):boolean{
          let rpta=false;
           let jwt=localStorage.getItem("jwt");

           if(jwt!=null){
              console.log("/************TIENE TOKEN VALIDO****************/");
                
                if(!this.tienePermiso(vista,this.rutas.VISUALIZAR_VIEW)){
                        this.mensajeInCorrecto("NO TIENE PERMISO PARA ESTA PANTALLA");
                        this.tienePermisoView=false;
                        rpta=false;
                }else{
                  rpta=true;
                }
             
           }else{
              console.log("/************NO TIENE TOKEN VALIDO************/");
              this.navegar("");
           }
           return rpta;
        }



       tienePermiso(vista:string,accion:string){
          let rpta=false;
          let permisos=JSON.parse(localStorage.getItem("permisos"));

          if(permisos!=null){
              let permisoVista=permisos[vista];
              
              if(permisoVista!=null){
                  let i;
                  for(i=0;i<permisoVista.length ;i++){
                      if(permisoVista[i]==accion){
                        rpta=true;
                        break;
                      }
                  }
              }
          }
          return rpta;

       }


       tienePermisoPrintMsj(vista:string,accion:string){
          let rpta=false;
          let permisos=JSON.parse(localStorage.getItem("permisos"));

          if(permisos!=null){
              let permisoVista=permisos[vista];
              
              if(permisoVista!=null){
                  let i;
                  for(i=0;i<permisoVista.length ;i++){
                      if(permisoVista[i]==accion){
                        rpta=true;
                        break;
                      }
                  }
              }
          }

          if(rpta==false){
            this.mensajeInCorrecto("USTED NO TIENE PERMISO PARA ESTA ACCION");
          }
          return rpta;

       }

        
        tokenInvalido(json: any):boolean{
           let rpta=false;
           
           if(json.hasOwnProperty("tokenInvalido")){
              let tokenInvalido=json.tokenInvalido;
              if(tokenInvalido){
                rpta=true;
                localStorage.removeItem("jwt");
                //localStorage.setItem("tokenInvalido",true);
                this.mensajeInCorrecto("SESIÓN EXPIRADA - INICIAR SESIÓN");
                this.navegar("");
                                       
              }
           }
           
           return rpta;
        }


        animar(){
            
            /************ANIMACION CON JQUERY ANGULAR 2********************/
              $(this.item).parent().addClass('active');
              $(this.item).addClass('active');
              
              
              $(this.menuItem).addClass('active');
              $('ul',this.menuItem).slideDown();
        }

        mensajeAdvertencia(mensaje :string){
          this.success=true;
          this.tipoAlerta="alert-warning";
          this.iconoAlerta="fa-close";
          this.msj=mensaje;
        }

        mensajeInCorrecto(mensaje :string){
          this.success=true; 
          this.tipoAlerta="alert-danger";
          this.iconoAlerta="fa-close";
          this.msj=mensaje;
        }
        
        mensajeCorrecto(mensaje :string){
          this.success=true; 
          this.tipoAlerta="alert-success";
          this.iconoAlerta="fa-check";
          this.msj=mensaje;
        }


 
        limpiarMensaje(){
                this.success=false;
                this.msj=null;
                this.iconoAlerta=null;
                this.tipoAlerta=null;
        }   


        obtenerFechaMesAnio(str:string){
          let fecha=str.substring(5,7)+"-"+str.substring(0, 4);
          return fecha;
        }    


        //***************FUNCIONES NECESARIAS PARA**********
        onValueChanged(data?: any ,formu?:any) {
                if (!formu) { return; }
                const form = formu;
                
                for (const field in this.formErrors) {
                        // clear previous error message (if any)
                        this.formErrors[field] = '';
                        const control = form.get(field);
                
                        if (control && control.dirty && !control.valid) {
                                const messages = this.validationMessages[field];
                                for (const key in control.errors) {
                                this.formErrors[field] += messages[key] + ' ';
                                }
                        }
                }
        }


      generarMsj(propiedad){
   

        let msjs= new Array();
        msjs['required']=' es requerido.';
        msjs['minlength']=' tiene que tener como minimo 4 caracteres.';
        msjs['maxlength']=' tiene que tener como minimo 4 caracteres.';

        let validadores =['required','minlength','maxlength'];

        //********SIRVE PARA GENERAR VALIDACIONES PERSONALIZADAS */
        let messa="{"; 
        let k;
        for(k=0; k<validadores.length; k++){
                if(k==validadores.length-1){
                        messa+="\""+validadores[k]+"\": \""+propiedad + msjs[validadores[k]]+"\"";   
                }else{
                        messa+="\""+validadores[k]+"\": \""+propiedad + msjs[validadores[k]]+"\","; 
                }
        }
        messa+="}"; 

        //console.log("valida json: "+messa);
        //let validationMessages=JSON.parse(messa);
        //console.log(validationMessages);

        return messa;
      }



     setVariables(propiedades:any){

        //********SIRVE PARA MAPEAR TODAS LAS VARIABLES QUE CONTENDRAN ERRORES */
        let errores="{";        
        let i;
        for(i=0; i<propiedades.length; i++){
                if(i==propiedades.length-1){
                        errores+="\""+propiedades[i]+"\": \"\"";   
                }else{
                        errores+="\""+propiedades[i]+"\": \"\",";
                }
        }
        errores+="}";
        this.formErrors=JSON.parse(errores);
        //console.log("errores json: "+errores);
        //console.log(this.formErrors);

        //********SIRVE PARA MAPEAR TODOS LOS MENSAJES DE ERRORES QUE SE OBTENDRAN POR VARIABLE */
        let valida="{"; 
        let j;
        for(j=0; j<propiedades.length; j++){
                this.generarMsj(propiedades[j]);
   
                if(j==propiedades.length-1){
                        valida+="\""+propiedades[j]+"\": "+ this.generarMsj(propiedades[j]);  
                }else{
                        valida+="\""+propiedades[j]+"\": "+ this.generarMsj(propiedades[j])+",";
                }
        }
        valida+="}"; 
        this.validationMessages=JSON.parse(valida);
        //console.log("valida json: "+valida);
        //console.log(this.validationMessages);


      }

      
      //*********CONSTRUIR FORMULARIOS*************
      buildForm(propiedades) {
        
        let form;
        let variables="{";        
        let i;
        for(i=0; i<propiedades.length; i++){
                if(i==propiedades.length-1){
                        variables+="\""+propiedades[i]+"\": []";   
                }else{
                        variables+="\""+propiedades[i]+"\": [],";
                }
        }
        variables+="}";
        let arreglo=JSON.parse(variables);

        form = this.formu.group(arreglo);

        this.setVariables(Object.keys(form.value));
        
        form.valueChanges
        .subscribe(data => this.onValueChanged(data,form));
        this.onValueChanged(form); // (re)set validation messages now
        
        this.formulario=form;

        return form;
      }


      //validacion(form,variable:string,required:boolean,min:boolean,max:boolean,valor_min?:number,valor_max?:number){
      validacion(variable:string,required:boolean,min:boolean,max:boolean,valor_min?:number,valor_max?:number){
         let valmin=valor_min!=null?valor_min:8;
         let valmax=valor_max!=null?valor_max:24;
         
         if(required)this.formulario.controls[variable].setValidators(Validators.required);
         if(min)this.formulario.controls[variable].setValidators(Validators.minLength(valmin));
         if(max)this.formulario.controls[variable].setValidators(Validators.maxLength(valmax));

       }

      setValueTxt(propiedad,valor){
          this.formulario.controls[propiedad].setValue(valor);
      }

}