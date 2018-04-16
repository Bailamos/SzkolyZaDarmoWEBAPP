import {Component, Input, OnInit} from '@angular/core';
import {Training} from "../../../../shared/models/training.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-trainings-home-list-item',
  templateUrl: './trainings-home-list-item.component.html',
  styleUrls: ['./trainings-home-list-item.component.css']
})
export class TrainingsHomeListItemComponent implements OnInit {
  @Input() public training: Training;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onTrainingClicked() {
    this.router.navigate(
      ['/szkolenie', this.training.id]);
  }
}
