import { Component, OnInit } from '@angular/core';
import {FormComponent} from "../../shared/utils/FormComponent.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Education} from '../../shared/models/domain-user/education.model';
import {MarketStatus} from '../../shared/models/market-status.model';
import {UserParameters} from "../../shared/models/domain-user/user-parameters.model";
import {Voivodeship} from '../../shared/models/domain-shared/voivodeship.model';
import {AreaOfResidence} from '../../shared/models/domain-user/area-of-residence.model';
import {Observable} from 'rxjs/Observable';
import {ResourcesService} from "../../shared/services/resources.service";
import {Sex} from "../../shared/models/domain-user/sex.model";
import {UsersService} from "../../shared/services/users.service";
import {Router, ActivatedRoute} from "@angular/router";
import {User} from "../../shared/models/user.model";
import {SaveUserResource} from "../../shared/models/resources/save-user-resource.model";
import {ListItem} from "../../shared/models/list-item.model";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent extends FormComponent implements OnInit {
  public paramSubscription;

  public loading: boolean = false;
  public success: boolean = false;

  public user: User;
  public userParameters: UserParameters;
  public entriesInfo: [{
    didParticipate: boolean,
    trainingId: boolean,
    entry: ListItem
  }];

  public marketStatuses: MarketStatus[] = [];
  public educations: Education[] = [];
  public sexes: Sex[] = [];
  public areasOfResidence: AreaOfResidence[] = [];
  public counties: any[] = [];
  public voivodeships: Voivodeship[] = [];

  constructor(
    private resourcesService: ResourcesService,
    private usersService: UsersService,
    private route: ActivatedRoute) {
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
            'birthYear': new FormControl(null, [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]),
            'marketStatus': new FormControl(null, Validators.required),
            'education': new FormControl(null, Validators.required),
            'areaOfResidence': new FormControl(null, Validators.required),
            'sex': new FormControl(null, Validators.required),
            'voivodeship': new FormControl(null, Validators.required),
            'county': new FormControl(null),
            'disability': new FormControl(false),
          })

          this.paramSubscription = this.route.params.subscribe(
            (params) => {
              var user_id: string = params['user_id'];
              this.usersService.getOne(user_id).subscribe(
                (user: any) => {
                  this.user = user;
                  this.form.setValue({
                    phoneNumber: user.phoneNumber,
                    email: user.email,
                    name: user.name,
                    surname: user.surname,
                    birthYear: user.birthYear,
                    marketStatus: user.marketStatus.id,
                    education: user.education.id,
                    areaOfResidence: user.areaOfResidence.id,
                    sex: user.sex.id,
                    voivodeship: user.voivodeship.id,
                    county: user.county != null ? user.county.id : null,
                    disability: user.hasDisability,
                  });
                  this.onVoivodeshipChange(user.voivodeship.id).then(
                    () => {
                      this.form.patchValue({
                        county: user.county != null ? user.county.id : null
                      })
                    }
                  );
                  this.entriesInfo = this.mapUserEntriesToListItem();
                  this.loading = false;
                }
              );
            });
        }
      )


  }

  onSubmit(){
    this.success = false;
    var saveUserResource = this.mapFormToSaveUserResource(this.form.value);
    this.loading = true;
    this.usersService.editUser(saveUserResource).subscribe(
      (response) => {
        this.success = true;
      },
      (error) => {
        console.log("błąd")
      },
      () => {
        this.loading = false;
        this.usersService.usersChanged.next();
      }
    )

  }

  onVoivodeshipChange(id: number) {
    return new Promise(
      (resolve, reject) => {
        this.resourcesService.getVoivodeshipCounties(id).subscribe(
          (res: any) => {
            this.counties = res;
            this.counties.unshift({value: null, label: ""})
            this.form.patchValue({'county': null});
            this.form.get('county').enable();
            resolve();
          }
        )
      }
    )
  }

  onChangeMarticipateStatus(trainingId: number) {
    this.usersService.changeEntryParticipate(this.user.phoneNumber, trainingId).subscribe(
      () => {
        this.usersService.getOne(this.user.phoneNumber).subscribe(
          (user: any) => {
            this.user = user;
            this.form.setValue({
              phoneNumber: user.phoneNumber,
              email: user.email,
              name: user.name,
              surname: user.surname,
              birthYear: user.birthYear,
              marketStatus: user.marketStatus.id,
              education: user.education.id,
              areaOfResidence: user.areaOfResidence.id,
              sex: user.sex.id,
              voivodeship: user.voivodeship.id,
              county: user.county != null ? user.county.id : null,
              disability: user.hasDisability,
            });
            this.onVoivodeshipChange(user.voivodeship.id).then(
              () => {
                this.form.patchValue({
                  county: user.county != null ? user.county.id : null
                })
              }
            );
            this.entriesInfo = this.mapUserEntriesToListItem();
            this.loading = false;
          }
        );
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
    saveUserResource.educationId = values.education;
    saveUserResource.voivodeshipId = values.voivodeship;
    saveUserResource.countyId = values.county;
    saveUserResource.areaOfResidenceId = values.areaOfResidence;
    saveUserResource.sexId = values.sex;
    saveUserResource.hasDisability = values.disability;
    return saveUserResource;
  }

  public mapUserEntriesToListItem(): any {
    return this.user.entries.map(e => {
      var listItem = new ListItem();
      listItem.values.push({label:'Data zapisania:', value: e.insertDate.toString(), style: {}});
      listItem.values.push({label:'Tytuł:', value: e.training.title, style: {}});
      listItem.values.push({label:'Kategoria:', value: e.training.category.name.toString(), style: {}});
      listItem.values.push({label:'Status:', value: e.training.marketStatus.status, style: {}});
      listItem.values.push({label:'Czy wział udział:', value: e.didParticipated ? 'Tak' : 'Nie', style: {}});

      var entryInfo = {
        didParticipate: e.didParticipated,
        trainingId: e.training.id,
        entry: listItem
      }

      return entryInfo;
    });
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
