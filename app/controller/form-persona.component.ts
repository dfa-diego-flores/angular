import { Component,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { ControllerComponent } from './controller.component';

//*****************IMPORTAR FORMULARIOS PARA VALIDACION**************
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

 
@Component({
	selector: 'app-form-main',
	templateUrl: '../view/form-persona.component.html'
})
export class FormPersonaComponent  extends ControllerComponent implements AfterViewInit{
	loginForm: FormGroup;

	constructor(public router: Router) {
            super(router);           
	} 

        ngAfterViewInit(){            
     
        }



}