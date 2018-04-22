import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {SharedModule} from "../shared/shared.module";
import { InstructorsOverviewComponent } from './instructors-overview/instructors-overview.component';
import { InstructorEditComponent } from './instructor-edit/instructor-edit.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    AdminComponent,
    InstructorsOverviewComponent,
    InstructorEditComponent
  ]
})
export class AdminModule { }
