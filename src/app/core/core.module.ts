import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TrainingsService} from '../shared/services/trainings.service';
import { HeaderComponent } from './header/header.component';
import {SharedModule} from '../shared/shared.module';
import {ResourcesService} from "../shared/services/resources.service";
import {UsersService} from "../shared/services/users.service";
import {EntryAddedOverlayService} from '../shared/services/entry-added-overlay.service';
import {EntryAddedOverlayComponent} from "../shared/overlays/entry-added-overlay/entry-added-overlay.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    TrainingsService,
    UsersService,
    ResourcesService,
    EntryAddedOverlayService
  ]
})
export class CoreModule { }
