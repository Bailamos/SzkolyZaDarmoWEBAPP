import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";

import { TrainingsHomeComponent } from './trainings-home/trainings-home.component';
import { TrainingsHomeListComponent } from './trainings-home/trainings-home-list/trainings-home-list.component';
import { TrainingsHomeListItemComponent } from './trainings-home/trainings-home-list/trainings-home-list-item/trainings-home-list-item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSelectModule} from "@angular/material";
import { TrainingEntryComponent } from './training-entry/training-entry.component';
import {AngularMultiSelectModule} from "angular2-multiselect-dropdown";
import { TrainingEntryFormComponent } from './training-entry/training-entry-form/training-entry-form.component';
import { TrainingEntryInformationsComponent } from './training-entry/training-entry-informations/training-entry-informations.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMultiSelectModule,
    MatSelectModule
  ],
  declarations: [
    TrainingsHomeComponent,
    TrainingsHomeListComponent,
    TrainingsHomeListItemComponent,
    TrainingEntryComponent,
    TrainingEntryFormComponent,
    TrainingEntryInformationsComponent,
  ],
})
export class UserModule { }
