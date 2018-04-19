import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSelectModule} from "@angular/material";
import {NgxPaginationModule} from 'ngx-pagination';

import { MultiSelectInputUIComponent } from './components/ui-controlls/multi-select-input/multi-select-input.component';
import {AngularMultiSelectModule} from "angular2-multiselect-dropdown";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SelectInputUIComponent } from './components/ui-controlls/select-input/select-input.component';
import {AngularFontAwesomeModule} from "angular-font-awesome";
import { BasicErrorViewComponent } from './components/error-display/basic-error-view/basic-error-view.component';
import { TextInputComponent } from './components/form-reactive/text-input/text-input.component';
import { SelectInputComponent } from './components/form-reactive/select-input/select-input.component';
import { DateInputComponent } from './components/form-reactive/date-input/date-input.component';
import {MyDatePickerModule} from "mydatepicker";
import { TextAreaInputComponent } from './components/form-reactive/text-area-input/text-area-input.component';
import {OverlayModule} from "@angular/cdk/overlay";
import { EntryAddedOverlayComponent } from './overlays/entry-added-overlay/entry-added-overlay.component';
import { NumberInputComponent } from './components/form-reactive/number-input/number-input.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    AngularMultiSelectModule,
    AngularFontAwesomeModule,
    MyDatePickerModule,
    MatSelectModule,
    OverlayModule
  ],
  declarations: [
    MultiSelectInputUIComponent,
    SelectInputUIComponent,
    BasicErrorViewComponent,
    TextInputComponent,
    SelectInputComponent,
    DateInputComponent,
    TextAreaInputComponent,
    EntryAddedOverlayComponent,
    NumberInputComponent
  ],
  exports: [
    NgxPaginationModule,
    RouterModule,
    AngularFontAwesomeModule,
    OverlayModule,
    ReactiveFormsModule,
    FormsModule,
    MultiSelectInputUIComponent,
    SelectInputUIComponent,
    BasicErrorViewComponent,
    TextInputComponent,
    SelectInputComponent,
    DateInputComponent,
    TextAreaInputComponent,
    NumberInputComponent,
    EntryAddedOverlayComponent
  ],
  entryComponents: [
    EntryAddedOverlayComponent
  ]
})
export class SharedModule { }
