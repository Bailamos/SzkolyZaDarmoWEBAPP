import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css']
})
export class SelectInputComponent implements OnInit {
  @Input('name') name;
  @Input('group') group;
  @Input('label') label;
  @Input('items') items: [{value: any, label: any}];

  @Output() onChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onChanged(itemValue) {
    this.onChange.next(itemValue);
  }
}
