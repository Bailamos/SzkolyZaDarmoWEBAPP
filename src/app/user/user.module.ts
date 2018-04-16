import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";

import { TrainingRegisterComponent } from './training-register/training-register.component';
import { TrainingsHomeComponent } from './trainings-home/trainings-home.component';
import { TrainingsHomeListComponent } from './trainings-home/trainings-home-list/trainings-home-list.component';
import { TrainingsHomeListItemComponent } from './trainings-home/trainings-home-list/trainings-home-list-item/trainings-home-list-item.component';
import { TrainingsSortComponent } from './trainings-home/trainings-sort/trainings-sort.component';
import { TrainingsFilterComponent } from './trainings-home/trainings-filter/trainings-filter.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSelectModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  declarations: [
    TrainingsHomeComponent,
    TrainingRegisterComponent,
    TrainingsHomeListComponent,
    TrainingsHomeListItemComponent,
    TrainingsSortComponent,
    TrainingsFilterComponent,
  ]
})
export class UserModule { }
