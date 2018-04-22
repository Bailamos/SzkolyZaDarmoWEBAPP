import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {TrainingsHomeComponent} from "./user/trainings-home/trainings-home.component";
import {TrainingEntryComponent} from "./user/training-entry/training-entry.component";
import {AuthComponent} from "./auth/auth.component";
import {InstructorManagmentComponent} from "./instructor-managment/instructor-managment.component";
import {TrainingAddFormComponent} from "./instructor-managment/training-add-form/training-add-form.component";
import {TrainingsManageComponent} from "./instructor-managment/trainings-manage/trainings-manage.component";
import {TrainingEditComponent} from "./instructor-managment/trainings-manage/training-edit/training-edit.component";
import {AdminComponent} from "./admin/admin.component";
import {InstructorsOverviewComponent} from "./admin/instructors-overview/instructors-overview.component";
import {InstructorEditComponent} from "./admin/instructor-edit/instructor-edit.component";

const appRoutes: Routes  = [
  {path: '', component: TrainingsHomeComponent},
  {path: 'szkolenie/:id', component: TrainingEntryComponent},
  {path: 'logowanie', component: AuthComponent},
  {path: 'panel/:id', component: InstructorManagmentComponent, children: [
    {path: 'szkolenia/dodaj', component: TrainingAddFormComponent},
    {path: 'szkolenia/zarzadzaj', component: TrainingsManageComponent},
    {path: 'szkolenia/zarzadzaj/:id/edytuj', component: TrainingEditComponent}
  ]},
  {path: 'admin/:admin_id', component: AdminComponent, children: [
    {path: 'instruktorzy', component: InstructorsOverviewComponent},
    {path: 'instruktorzy/:instr_id/edytuj', component: InstructorEditComponent},
    // {path: 'crm', component: CrmComponent, children: [
    //   {path: ':user_id/details', component: UserDetailsComponent},
    //   {path: ':user_id/email', component: EmailComponent},
    //   {path: 'email', component: EmailComponent}
    // ]}
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
