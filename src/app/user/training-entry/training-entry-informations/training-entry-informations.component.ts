import {Component, Input, OnInit} from '@angular/core';
import {Training} from "../../../shared/models/training.model";

@Component({
  selector: 'app-training-entry-informations',
  templateUrl: './training-entry-informations.component.html',
  styleUrls: ['./training-entry-informations.component.css']
})
export class TrainingEntryInformationsComponent implements OnInit {

  @Input() public training: Training;

  constructor() { }

  ngOnInit() {
  }

}
