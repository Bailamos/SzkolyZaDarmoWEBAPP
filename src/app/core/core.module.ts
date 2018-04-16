import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TrainingsService} from '../shared/services/trainings.service';
import { HeaderComponent } from './header/header.component';
import {SharedModule} from '../shared/shared.module';
import {ResourcesService} from "../shared/services/resources.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    TrainingsService,
    ResourcesService
  ]
})
export class CoreModule { }
