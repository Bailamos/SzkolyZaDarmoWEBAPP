import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import { CrmComponent } from './crm.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersListItemComponent } from './users-list/users-list-item/users-list-item.component';
import { UsersFilterComponent } from './users-filter/users-filter.component';
import { UsersSortComponent } from './users-sort/users-sort.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EmailComponent } from './email/email.component';
import { UserAddReminderFormComponent } from './user-add-reminder-form/user-add-reminder-form.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CrmComponent,
    UsersListComponent,
    UsersListItemComponent,
    UsersFilterComponent,
    UsersSortComponent,
    UserDetailsComponent,
    EmailComponent,
    UserAddReminderFormComponent,
    UserEditComponent
  ]
})
export class CrmModule { }
