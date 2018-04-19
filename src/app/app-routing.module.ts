import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {TrainingsHomeComponent} from "./user/trainings-home/trainings-home.component";
import {TrainingEntryComponent} from "./user/training-entry/training-entry.component";
import {AuthComponent} from "./auth/auth.component";
import {InstructorManagmentComponent} from "./instructor-managment/instructor-managment.component";
import {TrainingAddFormComponent} from "./instructor-managment/training-add-form/training-add-form.component";
import {TrainingsManageComponent} from "./instructor-managment/trainings-manage/trainings-manage.component";

const appRoutes: Routes  = [
  {path: '', component: TrainingsHomeComponent},
  {path: 'szkolenie/:id', component: TrainingEntryComponent},
  {path: 'logowanie', component: AuthComponent},
  {path: 'panel/:id', component: InstructorManagmentComponent, children: [
    {path: 'szkolenia/dodaj', component: TrainingAddFormComponent},
    {path: 'szkolenia/zarzadzaj', component: TrainingsManageComponent},
  ]},
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
