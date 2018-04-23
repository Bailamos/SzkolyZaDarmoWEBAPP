import {Component, OnDestroy, OnInit} from '@angular/core';
import {TrainingsService} from "../../shared/services/trainings.service";
import {ActivatedRoute} from "@angular/router";
import {Training} from "../../shared/models/training.model";
import {SaveUserResource} from "../../shared/models/resources/save-user-resource.model";
import {UsersService} from "../../shared/services/users.service";
import {EntryAddedOverlayService} from "../../shared/services/entry-added-overlay.service";

@Component({
  selector: 'app-training-entry',
  templateUrl: './training-entry.component.html',
  styleUrls: ['./training-entry.component.css']
})
export class TrainingEntryComponent implements OnInit, OnDestroy {
  public paramSubscription;
  public training: Training;
  public loading = false;

  constructor(
    private trainingsService: TrainingsService,
    private usersService: UsersService,
    private overlayService: EntryAddedOverlayService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramSubscription = this.route.params.subscribe(
      params => {
        var id = +params['id'];
        this.trainingsService.getTraining(id).subscribe(
          (response) =>{
            if(response.status == 204) console.log("Brak szkolenia o danym id");

            this.training = response.body;
          }, (err) => {
            console.log(err.message);
          })
      });
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

  onFormSubmit(values){
    var saveUserResource = this.mapFormToSaveUserResource(values);
    this.loading = true;
    this.usersService.registerUser(saveUserResource).subscribe(
      (response) => {
        this.overlayService.open(null);
      },
      (error) => {
        console.log("błąd")
      },
      () => {
        this.loading = false;
      }
    )
  }

  mapFormToSaveUserResource(values): SaveUserResource {
    var saveUserResource = new SaveUserResource();
    saveUserResource.email = values.email;
    saveUserResource.name = values.name;
    saveUserResource.surname = values.surname;
    saveUserResource.phoneNumber = values.phoneNumber;
    saveUserResource.birthYear = values.birthYear;
    saveUserResource.marketStatusId = values.marketStatus;
    saveUserResource.entry = {
      trainingId: this.training.id
    };
    saveUserResource.note = values.note ? {
      description: values.note
    } : null;
    saveUserResource.educationId = values.education;
    saveUserResource.voivodeshipId = values.voivodeship;
    saveUserResource.countyId = values.county;
    saveUserResource.areaOfResidenceId = values.areaOfResidence;
    saveUserResource.sexId = values.sex;
    saveUserResource.hasDisability = values.disability;

    return saveUserResource;
  }


}
