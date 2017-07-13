
import { Router } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import {Response,Headers,RequestOptions,URLSearchParams,ResponseContentType} from '@angular/http';
import {Rutas} from '../util/rutas-view';


/*****************PARA ACTIVAR MSJ CUANDO LA SESION EXPIRE****************/
import { ControllerComponent } from '../controller/controller.component';

export class Service {
        protected rutas:Rutas = new Rutas();
  
        constructor(protected router: Router) {

	}


        protected handleError (error: any) {
                //console.log("ERROR ENCONTRADO:"+JSON.stringify(error));
                // In a real world app, we might use a remote logging infrastructure
                // We'd also dig deeper into the error to get a better message
                let errMsg = (error.message) ? error.message :
                error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                console.error(errMsg); // log to console instead
                return Observable.throw(errMsg);
        }


        protected extractData(res: Response) {
                let body = res.json();
                console.log("cuerpo:"+body);
        
                return body.data || { };
        }

        protected verificarToken(){
           let jwt=localStorage.getItem("jwt");

           if(jwt!=null){
              //rpta=true;
              console.log("/************TIENE TOKEN VALIDO****************/");
             
           }else{
              console.log("/************NO TIENE TOKEN VALIDO************/");
              this.navegar("");
           }
    
        }


        protected tokenInvalido(json: any):boolean{
           let rpta=false;
           
           if(json.hasOwnProperty("tokenInvalido")){
              let tokenInvalido=json.tokenInvalido;
              if(tokenInvalido){
                rpta=true;
                localStorage.removeItem("jwt");
                ControllerComponent.finalizaSesion=true;
                //localStorage.setItem("tokenInvalido","true");
                //this.mensajeInCorrecto("SESIÓN EXPIRADA - INICIAR SESIÓN");
                this.navegar("");
                                       
              }
           }
           
           return rpta;
        }


        protected navegar(ruta : string): void {
                this.router.navigate([ruta]);
        }

        protected getOptionsToken(){
                /****************OBTENER TOKEN VALIDO***********/
                let jwt=localStorage.getItem("jwt");

                /***************CABECERAS PARA ENVIAR PARAMETROS EN PETICION GET**************/
                let headers = new Headers();     
                headers.append('Content-Type', 'application/json; charset=utf-8');

                let options = new RequestOptions({headers: headers});
                let params: URLSearchParams = new URLSearchParams();
                params.set("jwt",jwt);
                options.search = params;
                /********************FIN DE CABECERAS PARA ENVIAR PARAMETROS******************************************************/

                return options;

        }

           protected getOptionsTokenPDF(){
                /****************OBTENER TOKEN VALIDO***********/
                let jwt=localStorage.getItem("jwt");

                /***************CABECERAS PARA ENVIAR PARAMETROS EN PETICION GET**************/
                let headers = new Headers();     
                headers.append('Content-Type','application/pdf; charset=utf-8');
                //headers.append('Content-Type', 'application/json; charset=utf-8');

                //let options = new RequestOptions({headers: headers});
                let options = new RequestOptions({responseType: ResponseContentType.Blob});
                
                //let options = new RequestOptions({responseType: 'arraybuffer'});
                let params: URLSearchParams = new URLSearchParams();
                params.set("jwt",jwt);
                options.search = params;
                /********************FIN DE CABECERAS PARA ENVIAR PARAMETROS******************************************************/

                return options;

        }
           
}