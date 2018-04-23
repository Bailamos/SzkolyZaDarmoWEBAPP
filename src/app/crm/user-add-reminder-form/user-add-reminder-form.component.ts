import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormComponent} from "../../shared/utils/FormComponent.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";
import {UsersService} from "../../shared/services/users.service";

@Component({
  selector: 'app-user-add-reminder-form',
  templateUrl: './user-add-reminder-form.component.html',
  styleUrls: ['./user-add-reminder-form.component.css']
})
export class UserAddReminderFormComponent extends FormComponent implements OnInit {

  @Output()
  onAddReminder = new EventEmitter<any>();


  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService

  ) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      "description": new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    console.log(this.route.snapshot);
    var saveCommentResource = {
      instructorId: this.auth.getInstructor().id,
      userPhoneNumber: this.route.snapshot.params['user_id'],
      description: this.form.value.description,
    }

    this.usersService.addComment(saveCommentResource).subscribe(
      (res) => {
        this.router.navigate(['../szczegoly'], {relativeTo: this.route})
      }
    )
  }

}
