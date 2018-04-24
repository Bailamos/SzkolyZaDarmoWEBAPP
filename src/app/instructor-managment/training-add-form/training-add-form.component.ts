import {Component, Input, OnInit} from '@angular/core';
import {FormComponent} from "../../shared/utils/FormComponent.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DateValidators} from "../../shared/validators/date.validators";
import {ResourcesService} from "../../shared/services/resources.service";
import {TrainingParameters} from "../../shared/models/domain-training/trainining-parameters.model";
import {TrainingsService} from "../../shared/services/trainings.service";
import {SaveTrainingResource} from "../../shared/models/resources/save-training-resource.model";
import {AuthService} from "../../shared/services/auth.service";

import * as moment from "moment";
import {EntryAddedOverlayService} from "../../shared/services/entry-added-overlay.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TrainingAddedOverlayComponent} from "../../shared/overlays/training-added-overlay/training-added-overlay.component";

@Component({
  selector: 'app-training-add-form',
  templateUrl: './training-add-form.component.html',
  styleUrls: ['./training-add-form.component.css']
})
export class TrainingAddFormComponent extends FormComponent implements OnInit {
  @Input('training') training = null

  public voivodeships = [];
  public counties = [];
  public marketStatuses = [];
  public categories = [];

  public countiesSelectItems = [];
  public marketStatusesSelectItems = [];

  public editMode = false;
  public loading = false;

  constructor(
    private resourcesService: ResourcesService,
    private trainingsService: TrainingsService,
    private overlay: EntryAddedOverlayService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {

    this.initForm();
    this.fetchResources().then(
      () => {
        if(this.training != null) {
          this.editMode = true;
          this.populateForm();
        }
      }
    );
  }

  public onSubmit() {
    this.loading = true;
    var saveTrainingResource = this.mapFormToSaveTrainingResource(this.form.value);
    if(this.editMode){
      this.trainingsService.updateTraining(this.training.id, saveTrainingResource).subscribe(
        (result) => {
          this.overlay.open(
            null,
            TrainingAddedOverlayComponent,
            ['panel', saveTrainingResource.instructorId.toString()])
        },
        (error) => {

        },
        () => {
          this.loading = false;
        }
      );
    } else {
      this.trainingsService.createTraining(saveTrainingResource).subscribe(
        (result) => {
          this.overlay.open(
            null,
            TrainingAddedOverlayComponent,
            ['panel', saveTrainingResource.instructorId.toString()])
        },
        (error) => {
        },
        ()=> {
          this.loading = false;
        }
      );
    }
  }

  public initForm() {
    this.form = new FormGroup({
      "contactPhoneNumber": new FormControl(null, [Validators.required, Validators.pattern("^(\\d{7}|\\d{9})$")]),
      'contactEmail': new FormControl(null, [Validators.required, Validators.email]),
      "title": new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'tags': new FormControl([]),
      'marketStatuses': new FormControl([], Validators.required),
      'voivodeship': new FormControl([], Validators.required),
      'county': new FormControl([], Validators.required),
      'category': new FormControl(null, Validators.required),
      'registrationPeriod' : new FormGroup({
        'registerSince': new FormControl(null, Validators.required),
        'registerTo': new FormControl(null, Validators.required)
      }, DateValidators.validateRegistrationPeriod('registerSince','registerTo'))
    });
  }

  public fetchResources() {
    return new Promise((resolve, reject) => {
      this.resourcesService.getTrainingParameters().subscribe(
        (data: TrainingParameters) => {
          const trainingParameters: TrainingParameters = data;
          this.voivodeships = data.voivodeships;
          this.marketStatuses = data.marketStatuses;
          this.categories = data.categories;

          this.mapMarketStatusesToSelectItem();
          this.form.patchValue({category: this.categories[0].name});
          this.form.patchValue({marketStatus: this.marketStatuses[0].id});
          resolve();
        },
        () => {
          reject();
        }
      )
    });
  }

  public onVoivodeshipChange(voivodeshipId: number) {
    this.form.patchValue({county: []});
    this.populateCounties(voivodeshipId);
  }

  private populateForm() {
    this.populateCounties(this.training.voivodeship.id);

    var registerSince = {
      formatted: moment(new Date(this.training.registerSince)).format('YYYY-MM-DD'),
      epoc: new Date(this.training.registerSince).getTime()
    }
    var registerTo = {
      formatted: moment(new Date(this.training.registerTo)).format('YYYY-MM-DD'),
      epoc: new Date(this.training.registerTo).getTime()
    }

    this.form.setValue({
      contactPhoneNumber: this.training.contactPhoneNumber,
      contactEmail: this.training.contactEmail,
      title: this.training.title,
      description: this.training.description,
      tags: this.training.tags.map(tag => tag.name),
      category: this.training.category.name,
      voivodeship: this.training.voivodeship.id,
      county: this.training.counties.map(c => ({id: c.id, itemName: c.countyName})),
      marketStatuses: this.training.marketStatuses.map(m => ({id: m.id, itemName: m.status})),
      registrationPeriod: {
        registerSince: registerSince,
        registerTo: registerTo
      }
    })
  }

  private populateCounties(voivodeshipId: number) {
    this.resourcesService.getVoivodeshipCounties(voivodeshipId).subscribe(
      (res: any) => {
        this.counties = res;
        this.mapCountiesToSelectItem();
      }
    )
  }

  public mapCountiesToSelectItem() {
    this.countiesSelectItems = this.counties.map(c => ({id: c.id, itemName: c.countyName}))
  }

  public mapMarketStatusesToSelectItem() {
    this.marketStatusesSelectItems = this.marketStatuses.map(m => ({id: m.id, itemName: m.status}));
  }

  public mapFormToSaveTrainingResource(formValue): SaveTrainingResource{
    var saveTrainingResource = new SaveTrainingResource();
    saveTrainingResource.contactPhoneNumber = formValue.contactPhoneNumber;
    saveTrainingResource.contactEmail = formValue.contactEmail;
    saveTrainingResource.title = formValue.title;
    saveTrainingResource.categoryName = formValue.category;
    saveTrainingResource.description = formValue.description;
    saveTrainingResource.tags = formValue.tags.map(t => t.value);
    saveTrainingResource.instructorId = this.authService.getInstructor().id;
    saveTrainingResource.registerSince = formValue.registrationPeriod.registerSince.formatted;
    saveTrainingResource.registerTo = formValue.registrationPeriod.registerTo.formatted;
    saveTrainingResource.voivodeshipId = formValue.voivodeship;
    saveTrainingResource.marketStatuses = formValue.marketStatuses.map(it => it.id);
    saveTrainingResource.counties = formValue.county.map(it => it.id);
    saveTrainingResource.marketStatusId = saveTrainingResource.marketStatuses[0];
    saveTrainingResource.localizationId = saveTrainingResource.voivodeshipId;
    return saveTrainingResource;
  }

}
