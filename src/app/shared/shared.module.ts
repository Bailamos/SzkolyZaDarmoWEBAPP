import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgxPaginationModule} from 'ngx-pagination';
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSelectModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  declarations: [],
  exports: [
    NgxPaginationModule,
    RouterModule,
  ]
})
export class SharedModule { }
