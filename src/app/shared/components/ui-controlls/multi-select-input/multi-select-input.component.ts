import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectItem} from "../../../models/select-item.model";

@Component({
  selector: 'app-multi-select-ui-input',
  templateUrl: './multi-select-input.component.html',
  styleUrls: ['./multi-select-input.component.css']
})
export class MultiSelectInputUIComponent implements OnInit {
  @Input() public items: SelectItem[] = [];

  @Output()
  public selectionChange = new EventEmitter<SelectItem[]>();

  public selectedItems = [];

  public dropdownSettings = {};

  ngOnInit(){
    this.dropdownSettings = {
      singleSelection: false,
      enableCheckAll: true,
      text:"Wybierz",
      selectAllText:'Zaznacz wszystkie',
      unSelectAllText:'Odznacz wszystkie'
    };
  }

  onItemChange() {
    this.selectionChange.next(this.selectedItems.map(i => i.id));
  }
}


