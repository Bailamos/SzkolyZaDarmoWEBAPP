import { Component, OnInit } from '@angular/core';
import {SortCriteria} from "../../shared/criterias/sort-criteria";
import {TrainingSortCriteria} from "../../shared/criterias/trainings.sort-criteria";
import {Training} from "../../shared/models/training.model";
import {TrainingsService} from "../../shared/services/trainings.service";
import {QueryResult} from "../../shared/models/query-result.model";

@Component({
  selector: 'app-trainings-home',
  templateUrl: './trainings-home.component.html',
  styleUrls: ['./trainings-home.component.css']
})
export class TrainingsHomeComponent implements OnInit {

  public PAGE_SIZE = 5;

  public queryParams: any = {};
  public paginationOptions: any = {};
  public trainingsSortingCriteria: SortCriteria[] = TrainingSortCriteria.criteria;

  public trainings: Training[] = [];

  constructor(private trainingsService: TrainingsService) { }

  ngOnInit() {
    this.queryParams.sortBy = this.trainingsSortingCriteria[0].value.sortBy;
    this.queryParams.isSortAscending = this.trainingsSortingCriteria[0].value.isSortAscending
    this.paginationOptions.page = 1;
    this.paginationOptions.pageSize = this.PAGE_SIZE;

    this.populateTrainings();
  }

  public populateTrainings() {
    this.queryParams.page = this.paginationOptions.page;
    this.queryParams.pageSize = this.paginationOptions.pageSize;

    this.trainingsService.getTrainings(this.queryParams)
      .subscribe((response: QueryResult<Training>) => {
        this.trainings = response.items;
        this.paginationOptions.totalItems = response.itemsCount;
      })
  }

  public onSortingChanged(sortingOptions) {
    this.queryParams.sortBy = sortingOptions.sortBy;
    this.queryParams.isSortAscending = sortingOptions.isSortAscending;
    this.paginationOptions.page = 1;
    this.populateTrainings();
  }

  public onFilterChanged(filterOptions) {
    this.queryParams.localizations = filterOptions.selectedLocalizations;
    this.queryParams.categories = filterOptions.selectedCategories;
    if(filterOptions.selectedLocalizations.length === 0){
      delete this.queryParams.localizations;
    }
    if(filterOptions.selectedCategories.length === 0){
      delete this.queryParams.categories;
    }
    this.paginationOptions.page = 1;
    this.populateTrainings();
  }


  public getPage(pageNumber) {
    this.paginationOptions.page = pageNumber;
    this.populateTrainings();
  }

}
