import { Component, OnInit } from '@angular/core';
import {FormComponent} from "../../shared/utils/FormComponent.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent extends FormComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = new FormGroup({
      'phoneNumber': new FormControl(null)
    })
  }

}
