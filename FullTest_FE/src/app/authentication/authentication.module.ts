import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginWinnnowComponent } from './login-winnnow/login-winnnow.component';


@NgModule({
  declarations: [
    LoginWinnnowComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ,	QuickUiModule,
]
})
export class AuthenticationModule { }
