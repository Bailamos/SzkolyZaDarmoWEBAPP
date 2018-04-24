import { Component, OnInit, Input } from '@angular/core';
import {SelectItem} from '../../../models/select-item.model';


@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit {
  @Input('name') name;
  @Input('group') group;
  @Input('label') label;
  @Input() items: SelectItem[] = [];

  public dropdownSettings = {};


  constructor() {

  }

  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      enableCheckAll: true,
      text:"Wybierz",
      selectAllText:'Zaznacz wszystkie',
      unSelectAllText:'Odznacz wszystkie'
    };
  }


}
