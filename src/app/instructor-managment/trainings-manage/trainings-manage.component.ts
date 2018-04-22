import { Component, OnInit } from '@angular/core';
import {SortCriteria} from "../../shared/criterias/sort-criteria";
import {TrainingSortCriteria} from "../../shared/criterias/trainings.sort-criteria";
import {Training} from "../../shared/models/training.model";
import {AuthService} from "../../shared/services/auth.service";
import {TrainingsService} from "../../shared/services/trainings.service";
import {QueryResult} from "../../shared/models/query-result.model";

@Component({
  selector: 'app-trainings-manage',
  templateUrl: './trainings-manage.component.html',
  styleUrls: ['./trainings-manage.component.css']
})
export class TrainingsManageComponent implements OnInit {

  public PAGE_SIZE = 5;

  public onTrainingDeleteSubscription;

  public queryParams: any = {};

  public sortingCriteria: SortCriteria[] = TrainingSortCriteria.criteria;
  public paginationOptions: any = {};

  public trainings: Training[] = []
  public loading: boolean;

  constructor(
    private authService: AuthService,
    private trainingsService: TrainingsService) { }

  ngOnInit() {
    this.queryParams.sortBy = this.sortingCriteria[0].value.sortBy;
    this.queryParams.isSortAscending = this.sortingCriteria[0].value.isSortAscending
    this.queryParams.InstructorId = this.getInstructorId();

    this.paginationOptions.page = 1;
    this.paginationOptions.pageSize = this.PAGE_SIZE;

    this.onTrainingDeleteSubscription = this.trainingsService.onTrainingDelete.subscribe((id: number) => {
      console.log('usunieto szkolenie id' + id);
      this.populateTrainings();
    })

    this.populateTrainings();
  }

  ngOnDestroy(): void {
    this.onTrainingDeleteSubscription.unsubscribe();
  }

  public populateTrainings() {
    this.queryParams.page = this.paginationOptions.page;
    this.queryParams.pageSize = this.paginationOptions.pageSize;

    this.loading = true;
    this.trainingsService.getTrainings(this.queryParams)
      .subscribe((response: QueryResult<Training>) => {
        this.trainings = response.items;
        this.paginationOptions.totalItems = response.itemsCount;
        this.loading = false;
      })
  }

  public getPage(pageNumber) {
    this.paginationOptions.page = pageNumber;
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

  public onSortingChanged(sortingOptions) {
    this.queryParams.sortBy = sortingOptions.sortBy;
    this.queryParams.isSortAscending = sortingOptions.isSortAscending;
    this.paginationOptions.page = 1;
    this.populateTrainings();
  }

  public getInstructorId() {
    return this.authService.getInstructor().id;
  }
}
