import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {User} from "../../shared/models/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {EmailService} from "../../shared/services/email.service";
import {AuthService} from "../../shared/services/auth.service";
import {UsersService} from "../../shared/services/users.service";
import {ListItem} from "../../shared/models/list-item.model";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public paramSubscription: Subscription;
  public user: User;

  public logs = [];
  public comments = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private emailService: EmailService,
    private authService: AuthService,
    private usersService: UsersService) { }

  ngOnInit() {
    this.paramSubscription = this.route.params.subscribe(
      params => {
        var userId = params['user_id'];
        this.usersService.getOne(userId).subscribe(
          (response: User) => {
            this.user = response;
          }
        );
        this.usersService.getComments(userId).subscribe(
          (response: any) => {
            this.comments = response;
          },
          (err) => {

          }
        )
        this.usersService.getLogs(userId).subscribe(
          (response: [{date: Date, description: string}]) => {
            this.logs = response;
          },
          (err) => {

          }
        )
      });
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

  public onSendEmailClick() {
    this.emailService.setReceivers([this.user.email])
    this.router.navigate(['../../email'],{relativeTo: this.route})
  }

  public onAddCommentClick() {
    this.router.navigate(['../dodaj-komentarz'],{relativeTo: this.route})
  }

  public onEditClick() {
    this.router.navigate(['../edytuj'],{relativeTo: this.route})
  }

  public mapUserEntriesToListItem(): ListItem[] {
    return this.user.entries.map(e => {
      var listItem = new ListItem();
      listItem.values.push({label:'Data zapisania:', value: e.insertDate.toString(), style: {}});
      listItem.values.push({label:'Szkolenie:', value: e.training.title, style: {}});
      listItem.values.push({label:'Kategoria:', value: e.training.category.name.toString(), style: {}});
      listItem.values.push({label:'Szkolenie:', value: e.training.marketStatus.status, style: {}});
      return listItem;
    });
  }

  mapCommentsToListItem() {
    return this.comments.map(e => {
      var listItem = new ListItem();
      listItem.values.push({label:'Data dodania', value: e.date.toLocaleString().split('T')[0], style: {}});
      listItem.values.push({label:'Wiadomość', value: e.description, style: {}});
      listItem.values.push({label:'Przez', value: e.instructorEmail, style: {}});
      return listItem;
    });
  }
}
