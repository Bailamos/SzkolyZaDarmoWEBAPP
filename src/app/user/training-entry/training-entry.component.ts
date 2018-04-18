import {Component, OnDestroy, OnInit} from '@angular/core';
import {TrainingsService} from "../../shared/services/trainings.service";
import {ActivatedRoute} from "@angular/router";
import {Training} from "../../shared/models/training.model";
import {SaveUserResource} from "../../shared/models/resources/save-user-resource.model";
import {UsersService} from "../../shared/services/users.service";

@Component({
  selector: 'app-training-entry',
  templateUrl: './training-entry.component.html',
  styleUrls: ['./training-entry.component.css']
})
export class TrainingEntryComponent implements OnInit, OnDestroy {
  public paramSubscription;

  public training: Training;

  constructor(
    private trainingsService: TrainingsService,
    private usersService: UsersService,
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

    this.usersService.registerUser(saveUserResource).subscribe(
      (response) => {
        console.log("sukces")
        // this.loading = false;
        // this.info = new Info(
        //   InfoType.Ok,
        //   "Poprawnie zapisano na szkolenie! Sprawdz maila");
      },
      (error) => {
        console.log("błąd")
      }
    )
  }

  mapFormToSaveUserResource(values): SaveUserResource {
    var saveUserResource = new SaveUserResource();
    saveUserResource.email = values.email;
    saveUserResource.name = values.name;
    saveUserResource.surname = values.surname;
    saveUserResource.phoneNumber = values.phoneNumber;
    saveUserResource.birthDay = values.birthDay.formatted;
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