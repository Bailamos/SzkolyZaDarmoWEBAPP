import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorManagmentComponent } from './instructor-managment.component';
import { TrainingAddFormComponent } from './training-add-form/training-add-form.component';
import {SharedModule} from "../shared/shared.module";
import { TrainingsManageComponent } from './trainings-manage/trainings-manage.component';
import { TrainingsManagementListComponent } from './trainings-manage/trainings-management-list/trainings-management-list.component';
import { TrainingsManagementListItemComponent } from './trainings-manage/trainings-management-list/trainings-management-list-item/trainings-management-list-item.component';
import {TrainingEditComponent} from "./trainings-manage/training-edit/training-edit.component";




@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    InstructorManagmentComponent,
    TrainingAddFormComponent,
    TrainingsManageComponent,
    TrainingsManagementListComponent,
    TrainingsManagementListItemComponent,
    TrainingEditComponent
]
})
export class InstructorManagmentModule { }
