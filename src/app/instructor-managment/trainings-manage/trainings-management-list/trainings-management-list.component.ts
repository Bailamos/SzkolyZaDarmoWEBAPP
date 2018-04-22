import {Component, Input, OnInit} from '@angular/core';
import {Training} from "../../../shared/models/training.model";

@Component({
  selector: 'app-trainings-management-list',
  templateUrl: './trainings-management-list.component.html',
  styleUrls: ['./trainings-management-list.component.css']
})
export class TrainingsManagementListComponent implements OnInit {

  @Input()
  trainings: Training[] = [];

  @Input()
  paginationOption = {
    pageSize: 0,
    page: 0,
    totalItems: 0,
  };

  constructor() { }

  ngOnInit() {

  }

}
