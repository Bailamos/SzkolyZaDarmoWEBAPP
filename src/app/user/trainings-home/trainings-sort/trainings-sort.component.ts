import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SortCriteria} from "../../../shared/criterias/sort-criteria";

@Component({
  selector: 'app-trainings-sort',
  templateUrl: './trainings-sort.component.html',
  styleUrls: ['./trainings-sort.component.css']
})
export class TrainingsSortComponent implements OnInit {
  @Input() sortingCriteria: SortCriteria[];
  @Output() onSortingChanged = new EventEmitter<any>();

  public sortingOptions;

  constructor() { }

  ngOnInit() {
    this.sortingOptions = this.sortingCriteria[0].value;
  }

  onSortingChange() {
    this.onSortingChanged.next(this.sortingOptions);
  }

}
