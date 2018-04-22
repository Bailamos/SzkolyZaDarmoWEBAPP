import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SortCriteria} from "../../../criterias/sort-criteria";
import {SelectItem} from "../../../models/select-item.model";

@Component({
  selector: 'app-trainings-sort',
  templateUrl: './trainings-sort.component.html',
  styleUrls: ['./trainings-sort.component.css']
})
export class TrainingsSortComponent implements OnInit {
  @Input() sortingCriteria: SortCriteria[];
  @Output() onSortingChanged = new EventEmitter<any>();

  public sortSelectItems = [];

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes) {
    this.sortSelectItems = this.sortingCriteria.map(c => new SelectItem(c.value, c.label));
  }

  onSelectionChange(sortingCriteriaSelected) {
    this.onSortingChanged.next(sortingCriteriaSelected[0]);
  }

  public mapSortingCriteriaToSelectItem() {
    return this.sortingCriteria.map(c => new SelectItem(c.value, c.label));
  }

}
