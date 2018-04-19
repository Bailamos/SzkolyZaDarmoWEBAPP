import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorManagmentComponent } from './instructor-managment.component';
import { TrainingAddFormComponent } from './training-add-form/training-add-form.component';
import {SharedModule} from "../shared/shared.module";
import { TrainingsManageComponent } from './trainings-manage/trainings-manage.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    InstructorManagmentComponent,
    TrainingAddFormComponent,
    TrainingsManageComponent]
})
export class InstructorManagmentModule { }
