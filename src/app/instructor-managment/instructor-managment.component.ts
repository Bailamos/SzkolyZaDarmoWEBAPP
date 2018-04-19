import { Component, OnInit } from '@angular/core';
import {Instructor} from "../shared/models/instructor.model";
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-instructor-managment',
  templateUrl: './instructor-managment.component.html',
  styleUrls: ['./instructor-managment.component.css']
})
export class InstructorManagmentComponent implements OnInit {

  instructor: Instructor;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.instructor = this.authService.getInstructor();
  }

}
