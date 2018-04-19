import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthLogInComponent } from './auth-log-in/auth-log-in.component';
import {SharedModule} from "../shared/shared.module";
import { AuthRegisterComponent } from './auth-register/auth-register.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    AuthComponent,
    AuthLogInComponent,
    AuthRegisterComponent
  ]
})
export class AuthModule { }
