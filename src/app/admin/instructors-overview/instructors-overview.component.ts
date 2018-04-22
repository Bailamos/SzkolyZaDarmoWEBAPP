import { Component, OnInit } from '@angular/core';
import {Instructor} from "../../shared/models/instructor.model";
import {ActivatedRoute, Router} from "@angular/router";
import {QueryResult} from "../../shared/models/query-result.model";
import {ListItem} from "../../shared/models/list-item.model";
import {InstructorsService} from "../../shared/services/instructors.service";

@Component({
  selector: 'app-instructors-overview',
  templateUrl: './instructors-overview.component.html',
  styleUrls: ['./instructors-overview.component.css']
})
export class InstructorsOverviewComponent implements OnInit {

  public instructors: Instructor[];
  public instructorsListItems: ListItem[];
  public instructorsCount: number;

  constructor(
    private instructorsService: InstructorsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.instructorsService.getInstructors().subscribe(
      (response: QueryResult<Instructor>) =>{
        this.instructors = response.items;
        this.instructorsListItems = this.instructors.map(ins => this.mapInstructorToInstructorListItem(ins));
        this.instructorsCount = response.itemsCount;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public onItemClicked(instructorListItem: ListItem) {
    var instructor: Instructor = instructorListItem.object as Instructor;
    this.router.navigate(
      [instructor.id, 'edytuj'],
      {relativeTo:this.route});
  }

  public mapInstructorToInstructorListItem(instructor: Instructor): ListItem {
    var listItem: ListItem = new ListItem();
    listItem.object = instructor;
    listItem.values.push({label:'imie', value: instructor.name, style: {}})
    listItem.values.push({label:'nazwisko', value: instructor.surname, style: {}})
    listItem.values.push({label:'telefon', value: instructor.phoneNumber, style: {}})
    listItem.values.push({label:'email', value: instructor.email, style: {}})
    listItem.values.push({label:'Status', value: String(instructor.isActivated), style: {color: instructor.isActivated ? 'green' : 'red'}})
    return listItem;
  }
}
