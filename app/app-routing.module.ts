import { ModuleWithProviders} from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormLoginComponent } from './controller/form-login.component';
import { FormMainComponent } from './controller/form-main.component';
import { FormPersonaComponent } from './controller/form-persona.component';

const routes: Routes = [
  {
    path: '',
    component: FormLoginComponent,   
  },

  {
    path: 'home', 
    component: FormMainComponent,
  },

  {  
    path: 'main',
    component: FormMainComponent , 
    //outlet: 'aux'
     children: [
        { path: 'registro', component: FormPersonaComponent , outlet: 'menu'},
     ]   
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

//export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes,{ useHash: true });