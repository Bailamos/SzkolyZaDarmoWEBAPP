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
import {MultiselectDropdownModule} from "angular-2-dropdown-multiselect";
import { MultiSelectComponent } from './components/form-reactive/multi-select/multi-select.component';
import {TagInputModule} from "ng2-tag-input/dist/modules";
import {RlTagInputModule} from "angular2-tag-input/dist";
import {TrainingsSortComponent} from "./components/utils/trainings-sort/trainings-sort.component";
import {TrainingsFilterComponent} from "./components/utils/trainings-filter/trainings-filter.component";
import { TrainingAddedOverlayComponent } from './overlays/training-added-overlay/training-added-overlay.component';
import { SimpleListComponent } from './components/utils/simple-list/simple-list.component';
import { SimpleListItemComponent } from './components/utils/simple-list/simple-list-item/simple-list-item.component';


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
    MultiselectDropdownModule,
    OverlayModule,
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
    NumberInputComponent,
    MultiSelectComponent,
    TrainingsSortComponent,
    TrainingsFilterComponent,
    TrainingAddedOverlayComponent,
    SimpleListComponent,
    SimpleListItemComponent
  ],
  exports: [
    NgxPaginationModule,
    RouterModule,
    AngularFontAwesomeModule,
    OverlayModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMultiSelectModule,
    RlTagInputModule,
    MultiSelectInputUIComponent,
    SelectInputUIComponent,
    BasicErrorViewComponent,
    TextInputComponent,
    SelectInputComponent,
    DateInputComponent,
    TextAreaInputComponent,
    NumberInputComponent,
    EntryAddedOverlayComponent,
    MultiselectDropdownModule,
    MultiSelectComponent,
    TrainingsSortComponent,
    TrainingsFilterComponent,
    TrainingAddedOverlayComponent,
    SimpleListComponent,
    SimpleListItemComponent
  ],
  entryComponents: [
    EntryAddedOverlayComponent,
    TrainingAddedOverlayComponent
  ]
})
export class SharedModule { }
