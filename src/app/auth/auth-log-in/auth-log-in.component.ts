import { Component, OnInit } from '@angular/core';
import {Instructor} from "../../shared/models/instructor.model";
import {FormComponent} from "../../shared/utils/FormComponent.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-auth-log-in',
  templateUrl: './auth-log-in.component.html',
  styleUrls: ['./auth-log-in.component.css']
})
export class AuthLogInComponent extends FormComponent implements OnInit {

  public loading: boolean = false;
  public instructor: Instructor = null;

  constructor(private authService: AuthService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl('szkolimyzadarmotest@gmail.com', Validators.required),
      'password' : new FormControl('admin', Validators.required)
    });
  }

  onSubmit() {
    this.loading = true;
    this.authService.logIn(this.form.value.email, this.form.value.password).subscribe(
      (res: Instructor) => {
        this.loading = false;
        this.instructor = res;
        this.authService.setInstructor(res);
      },
      (err) => {
        console.log(err);
      }
    )

  }
}
