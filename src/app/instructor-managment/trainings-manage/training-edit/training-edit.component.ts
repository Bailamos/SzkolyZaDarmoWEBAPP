import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {TrainingsService} from "../../../shared/services/trainings.service";
import {Training} from "../../../shared/models/training.model";

@Component({
  selector: 'app-training-edit',
  templateUrl: './training-edit.component.html',
  styleUrls: ['./training-edit.component.css']
})
export class TrainingEditComponent implements OnInit {

  public paramsSubscription;
  public training: Training;

  constructor(
    private route: ActivatedRoute,
    private trainingsService: TrainingsService) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        var id = params['id'];
        return this.trainingsService.getTraining(id).subscribe(
          (res) =>{
            this.training = res.body;
          },
          (err) => {
            console.log('error')
          })
      }
    );
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }
}
