import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-users-sort',
  templateUrl: './users-sort.component.html',
  styleUrls: ['./users-sort.component.css']
})
export class UsersSortComponent implements OnInit {
  @Input()
  sortingCriteria = [];

  @Output()
  sortingChanged = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  onSortingChanged(event) {
    this.sortingChanged.emit(event);
  }

}
