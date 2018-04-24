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
import {CrmComponent} from "./crm/crm.component";
import {UserDetailsComponent} from "./crm/user-details/user-details.component";
import {EmailComponent} from "./crm/email/email.component";
import {UserAddReminderFormComponent} from "./crm/user-add-reminder-form/user-add-reminder-form.component";
import {UserEditComponent} from "./crm/user-edit/user-edit.component";

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
    {path: 'crm', component: CrmComponent, children: [
      {path: 'email', component: EmailComponent},
      {path: ':user_id/dodaj-komentarz', component: UserAddReminderFormComponent},
      {path: ':user_id/szczegoly', component: UserDetailsComponent},
      {path: ':user_id/edytuj', component: UserEditComponent}
    ]}
  ]},
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
