import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListItem} from "../../../../models/list-item.model";

@Component({
  selector: 'app-simple-list-item',
  templateUrl: './simple-list-item.component.html',
  styleUrls: ['./simple-list-item.component.css']
})
export class SimpleListItemComponent implements OnInit {

  @Input() public item: ListItem;
  @Output() public itemClicked = new EventEmitter<ListItem>()

  constructor() { }

  ngOnInit() {
  }

  onItemClicked() {
    this.itemClicked.next(this.item);
  }

}
