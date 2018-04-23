import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../shared/models/user.model";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input()
  public users: User[] = [];

  @Input()
  public paginationOption = {
    pageSize: 0,
    page: 0,
    totalItems: 0
  };

  constructor() { }

  ngOnInit() {
  }

}
