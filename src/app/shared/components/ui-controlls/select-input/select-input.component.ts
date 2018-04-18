import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectItem} from "../../../models/select-item.model";

@Component({
  selector: 'app-select-ui-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css']
})
export class SelectInputUIComponent implements OnInit {

  @Input() public items: SelectItem[] = [];

  @Output()
  public selectionChange = new EventEmitter<SelectItem[]>();

  public selectedItems = [];

  public dropdownSettings = {};

  ngOnInit(){
    this.selectedItems.push(this.items[0]);
    this.dropdownSettings = {
      singleSelection: true,
      enableCheckAll: true,
      text:"Wybierz",
    };
  }

  onItemChange() {
    if(this.selectedItems.length == 0) {
      this.selectedItems.push(this.items[0]);
    }
    this.selectionChange.next(this.selectedItems.map(i => i.id));
  }

}
