import {Component, Inject, OnInit} from '@angular/core';
import {UsersService} from "../shared/services/users.service";
import {TrainingsService} from "../shared/services/trainings.service";
import {Router} from '@angular/router';
import {ActivatedRoute} from "@angular/router";
import {EmailService} from '../shared/services/email.service';
import {UserSortCriteria} from "../shared/criterias/user.sort-criteria";
import {SortCriteria} from "../shared/criterias/sort-criteria";
import {QueryResult} from "../shared/models/query-result.model";
import {User} from "../shared/models/user.model";
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.css']
})
export class CrmComponent implements OnInit {
  public PAGE_SIZE = 5;
  public paginationOptions: any = {};
  public queryParams: any = {};
  public sortingCriteria: SortCriteria[] = UserSortCriteria.criteria;

  public users = [];

  constructor(
    @Inject(DOCUMENT) private document,
    private usersService: UsersService,
    private trainingsService: TrainingsService,
    private emailsService: EmailService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.queryParams.sortBy = this.sortingCriteria[0].value.sortBy;
    this.queryParams.isSortAscending = this.sortingCriteria[0].value.isSortAscending;
    this.paginationOptions.page = 1;
    this.paginationOptions.pageSize = this.PAGE_SIZE;

    this.populateUsers();
  }

  public onSortingChanged(sortingOptions) {
    this.queryParams.sortBy = sortingOptions.sortBy;
    this.queryParams.isSortAscending = sortingOptions.isSortAscending;
    this.paginationOptions.page = 1;
    this.populateUsers();
  }

  onFilterChange(filter) {
    this.queryParams.categories = filter.categories;
    this.queryParams.localizations = filter.voivodeships;
    this.queryParams.marketStatuses = filter.marketStatuses;
    this.queryParams.AgeTo = filter.ageTo;
    this.queryParams.AgeFrom = filter.ageFrom;
    this.paginationOptions.page = 1;

    this.populateUsers();
  }

  public getPage(page) {
    this.paginationOptions.page = page;
    this.populateUsers();
  }

  public populateUsers() {
    this.queryParams.page = this.paginationOptions.page;
    this.queryParams.pageSize = this.paginationOptions.pageSize;

    this.usersService.getUsers(this.queryParams)
      .subscribe(
        (res: QueryResult<User>) =>{

          this.users = res.items;
          this.paginationOptions.totalItems = res.itemsCount;
        }
      )
  }


  onSendEmailClick() {
    this.usersService.getEmails(this.queryParams)
      .subscribe(
        (res: string[]) => {
          this.emailsService.setReceivers(res);
          this.router.navigate(['./email'],{relativeTo: this.route})
        }
      )
  }

  onCsv() {
    this.document.location.href = 'http://localhost:5000/api/users/csv';
  }
}
