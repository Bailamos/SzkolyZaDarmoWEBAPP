import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {FormComponent} from "../../shared/utils/FormComponent.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SaveInstructorResource} from "../../shared/models/resources/save/save-instructor-resource.model";

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css']
})
export class AuthRegisterComponent extends FormComponent implements OnInit {

  public error: boolean = false;

  constructor(private authService: AuthService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl('szkolimyzadarmotest@gmail.com', Validators.required),
      'password' : new FormControl('admin', Validators.required),
      'phoneNumber': new FormControl('721587114', Validators.required),
      'name': new FormControl('Szymon', Validators.required),
      'surname' : new FormControl('Kaczorowski', Validators.required)
    });
  }

  onSubmit() {
    var instructor = this.mapFormToSaveInstructorResource();
    this.error = false;
    this.authService.register(instructor).subscribe(
      (res) => {
        console.log('pomyslnie');
      },
      (err) => {
        this.error = true;
        console.log('nie pomyslnie');
      }
    )
  }

  mapFormToSaveInstructorResource() : SaveInstructorResource{
    var saveInstructorResource = new SaveInstructorResource()
    saveInstructorResource = this.form.value;
    return saveInstructorResource;
  }
}
