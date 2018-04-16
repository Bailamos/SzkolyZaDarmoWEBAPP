import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {TrainingsHomeComponent} from "./user/trainings-home/trainings-home.component";
import {TrainingRegisterComponent} from './user/training-register/training-register.component';

const appRoutes: Routes  = [
  {path: '', component: TrainingsHomeComponent},
  {path: 'szkolenie/:id', component: TrainingRegisterComponent},
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
