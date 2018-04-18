import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {TrainingsHomeComponent} from "./user/trainings-home/trainings-home.component";
import {TrainingEntryComponent} from "./user/training-entry/training-entry.component";

const appRoutes: Routes  = [
  {path: '', component: TrainingsHomeComponent},
  {path: 'szkolenie/:id', component: TrainingEntryComponent},
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
