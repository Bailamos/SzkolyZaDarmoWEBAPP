import {Component, Input, OnInit} from '@angular/core';
import {IMyDpOptions} from "mydatepicker";

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements OnInit {
  @Input('name') name;
  @Input('group') group;
  @Input('label') label;
  public pickerOptions: IMyDpOptions = {
    editableDateField: false,
    openSelectorOnInputClick:true,
    showTodayBtn: false,
  };

  ngOnInit() {
  }

}
