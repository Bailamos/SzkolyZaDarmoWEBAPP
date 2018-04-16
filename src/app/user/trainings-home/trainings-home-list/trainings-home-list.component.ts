import {Component, Input, OnInit} from '@angular/core';
import {Training} from "../../../shared/models/training.model";

@Component({
  selector: 'app-trainings-home-list',
  templateUrl: './trainings-home-list.component.html',
  styleUrls: ['./trainings-home-list.component.css']
})
export class TrainingsHomeListComponent implements OnInit {
  @Input() trainings: Training[] = [];
  @Input() paginationOption = {
    pageSize: 0,
    page: 0,
    totalItems: 0,
  };

  constructor() { }

  ngOnInit() {
  }

}
