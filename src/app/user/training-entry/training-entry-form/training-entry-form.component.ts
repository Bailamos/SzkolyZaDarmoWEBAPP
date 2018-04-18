import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";

import {FormComponent} from "../../../shared/utils/FormComponent.model";
import {MarketStatus} from "../../../shared/models/market-status.model";
import {Education} from "../../../shared/models/domain-user/education.model";
import {Sex} from "../../../shared/models/domain-user/sex.model";
import {AreaOfResidence} from '../../../shared/models/domain-user/area-of-residence.model';
import {Voivodeship} from "../../../shared/models/domain-shared/voivodeship.model";
import {UserParameters} from "../../../shared/models/domain-user/user-parameters.model";
import {ResourcesService} from "../../../shared/services/resources.service";
import "rxjs/add/observable/forkJoin";
import {FormControl, Validators} from '@angular/forms';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-training-entry-form',
  templateUrl: './training-entry-form.component.html',
  styleUrls: ['./training-entry-form.component.css']
})
export class TrainingEntryFormComponent extends FormComponent implements OnInit {
  public loading: boolean = false;

  public userParameters: UserParameters;

  public marketStatuses: MarketStatus[] = [];
  public educations: Education[] = [];
  public sexes: Sex[] = [];
  public areasOfResidence: AreaOfResidence[] = [];
  public counties: any[] = [];
  public voivodeships: Voivodeship[] = [];

  constructor(
    private resourcesService: ResourcesService) {
    super();
  }

  ngOnInit() {
    this.loading = true;
    Observable.forkJoin([
      this.resourcesService.getUserParameters(),
      this.resourcesService.getVoivodeships()])
      .subscribe(
        (data: any) => {
          this.userParameters = data[0];
          this.voivodeships = data[1];

          this.areasOfResidence = this.userParameters.areasOfResidence;
          this.marketStatuses = this.userParameters.marketStatuses;
          this.educations = this.userParameters.educations;
          this.sexes = this.userParameters.sexes;

          this.form = new FormGroup({
            "phoneNumber": new FormControl(null, [Validators.required, Validators.pattern("^(\\d{7}|\\d{9})$")]),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'name': new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z\\s]*$")]),
            'surname': new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z\\s]*$")]),
            'birthDay': new FormControl(null, Validators.required),
            'marketStatus': new FormControl(this.marketStatuses[0].id, Validators.required),
            'education': new FormControl(this.educations[0].id, Validators.required),
            'areaOfResidence': new FormControl(this.areasOfResidence[0].id, Validators.required),
            'sex': new FormControl(this.sexes[0].id, Validators.required),
            'voivodeship': new FormControl(null, Validators.required),
            'county': new FormControl(null),
            'disability': new FormControl(false),
            'note': new FormControl(null)
          })
          this.form.get('county').disable();
          this.loading = false;
        }
      )
  }

  onSubmit(){
    this.onFormSubmit.next(this.form.value);
  }

  onVoivodeshipChange(id: number) {
    this.resourcesService.getVoivodeshipCounties(id).subscribe(
      (res: any) => {
        this.counties = res;
        this.counties.unshift({value: null, label: ""})
        this.form.patchValue({'county': null});
        this.form.get('county').enable();
      }
    )
  }

  mapEducationsToSelectItems() {
    return this.educations.map(e => ({value: e.id, label: e.educationType}));
  }

  mapAreasOfResidenceToSelectItems() {
    return this.areasOfResidence.map(a => ({value: a.id, label: a.areaType}));
  }

  mapSexesToSelectItems() {
    return this.sexes.map(s => ({value: s.id, label: s.name}));
  }

  mapVoivodeshipToSelectItems() {
    return this.voivodeships.map(v => ({value: v.id, label: v.voivodeshipName}));
  }

  mapCountiesToSelectItems() {
    return this.counties.map(c => ({value: c.id, label: c.countyName}));
  }

  mapMarketStatusesToSelectItem() {
    return this.marketStatuses.map(c => ({value: c.id, label: c.status}));
  }
}
