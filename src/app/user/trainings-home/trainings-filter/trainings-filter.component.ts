import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ResourcesService} from "../../../shared/services/resources.service";
import {TrainingParameters} from "../../../shared/models/trainining-parameters.model";
import {SelectItem} from '../../../shared/models/select-item.model';

@Component({
  selector: 'app-trainings-filter',
  templateUrl: './trainings-filter.component.html',
  styleUrls: ['./trainings-filter.component.css']
})
export class TrainingsFilterComponent implements OnInit {
  @Output() onFilterChanged = new EventEmitter<any>();

  public voivodeships: any[] = [];
  public categories: any[] = [];

  public filterOptions = {
    selectedLocalizations: [],
    selectedCategories: []
  }


  constructor(
    private resourcesService: ResourcesService) { }

  ngOnInit() {
    this.resourcesService.getTrainingParameters().subscribe(
      (res: TrainingParameters) => {
        this.voivodeships = res.voivodeships;
        this.categories = res.categories;
      },
    (err) => {
        console.log("Nie udało się pobrać parametrów filtrowania")
      }
    )
  }

  onFilterChange() {
    this.onFilterChanged.emit(this.filterOptions);
  }

  public mapCategoriesToSelectItem() {
    return this.categories.map(c => ({value: c.name, label: c.name}));
  }
}
