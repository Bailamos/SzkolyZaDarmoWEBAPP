import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {Instructor} from "../../shared/models/instructor.model";
import {ActivatedRoute, Router} from "@angular/router";
import {InstructorsService} from "../../shared/services/instructors.service";

@Component({
  selector: 'app-instructor-edit',
  templateUrl: './instructor-edit.component.html',
  styleUrls: ['./instructor-edit.component.css']
})
export class InstructorEditComponent implements OnInit {

  paramSubscription: Subscription;
  instructor: Instructor;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private instructorsService: InstructorsService) { }

  ngOnInit() {
    this.paramSubscription = this.route.params.subscribe(
      params => {
        var id = +params['instr_id'];
        this.instructorsService.getInstructor(id).subscribe(
          (res) => {
            this.instructor = res;
          },
          (err) => {
            console.log(err);
          }
        );
      });
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

  onDeleteInstructorClicked() {
    this.instructorsService
      .removeInstructor(this.instructor.id)
      .subscribe(
        (res) => {
          if(res.status == 200) {
            this.router.navigate(['../../'], {relativeTo: this.route});
          }
        }
      )
  }

  chanageInstructorStatus() {
    this.instructorsService
      .activateInstructor(this.instructor.id)
      .subscribe(
        (res) => {
          this.instructor = res;
        }
      )
  }

}
