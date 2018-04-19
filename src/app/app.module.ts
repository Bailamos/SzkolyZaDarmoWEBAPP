import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {CoreModule} from './core/core.module';
import {UserModule} from './user/user.module';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {EntryAddedOverlayComponent} from "./shared/overlays/entry-added-overlay/entry-added-overlay.component";
import {AuthModule} from "./auth/auth.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    UserModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
