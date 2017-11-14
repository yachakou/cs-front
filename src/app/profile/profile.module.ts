import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfilComponent} from './profil.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {appRoutes} from '../router/route.model';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    )
  ]
  ,
  declarations: [
    ProfilComponent,
    LoginComponent,
    RegisterComponent],
  providers: [],
})
export class ProfileModule {
}
