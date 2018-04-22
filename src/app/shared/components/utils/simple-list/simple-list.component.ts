import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListItem} from "../../../models/list-item.model";

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.css']
})
export class SimpleListComponent implements OnInit {

  @Input()
  items: ListItem[] = [];
  @Input()
  paginationOption = {};
  @Output()
  itemClicked = new EventEmitter<ListItem>();

  constructor() { }

  ngOnInit() {
  }

  onItemClicked(item: ListItem) {
    this.itemClicked.next(item);
  }

}
