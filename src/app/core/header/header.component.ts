import { Component, OnInit } from '@angular/core';
import {Instructor} from "../../shared/models/instructor.model";
import {Subscription} from "rxjs/Subscription";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public instructor: Instructor;
  public subscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.subscription = this.authService.instructorChanged.subscribe(
      (res: Instructor) => {
        this.instructor = res;
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getInstructorId() {
    return this.instructor.id;
  }

  logout() {
    this.authService.setInstructor(null);
    this.router.navigate(['/'])
  }

}
