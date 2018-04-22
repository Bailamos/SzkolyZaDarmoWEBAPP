import {Component, Input, OnInit} from '@angular/core';
import {Training} from "../../../../shared/models/training.model";
import {TrainingsService} from "../../../../shared/services/trainings.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-trainings-management-list-item',
  templateUrl: './trainings-management-list-item.component.html',
  styleUrls: ['./trainings-management-list-item.component.css']
})
export class TrainingsManagementListItemComponent implements OnInit {

  @Input()
  public training: Training;


  constructor(
    private trainingsService: TrainingsService,
    private router: Router) { }

  ngOnInit() {
  }

  onDelete() {
    this.trainingsService.deleteTraining(this.training.id).subscribe(
      (response) => {
        this.trainingsService.onTrainingDelete.next(this.training.id);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
