import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import {ResourcesService} from "../../../services/resources.service";
import {TrainingParameters} from "../../../models/domain-training/trainining-parameters.model";
import {SelectItem} from '../../../models/select-item.model';;

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

  voivodeshipsSelectItems = [];
  categoriesSelectItems = [];


  constructor(
    private resourcesService: ResourcesService) { }

  ngOnInit() {
    this.resourcesService.getTrainingParameters().subscribe(
      (res: TrainingParameters) => {
        this.voivodeships = res.voivodeships;
        this.categories = res.categories;

        this.voivodeshipsSelectItems = this.mapVoivodeshipsToSelectItem();
        this.categoriesSelectItems = this.mapCategoriesToSelectItem();
      },
    (err) => {
        console.log("Nie udało się pobrać parametrów filtrowania")
      }
    )
  }

  onVoivodeshipsSelectionChange(selectedVoivodeships) {
    this.filterOptions.selectedLocalizations = selectedVoivodeships;
    this.onFilterChange();
  }

  onCategoriesSelectionChange(selectedCategories) {
    this.filterOptions.selectedCategories = selectedCategories;
    this.onFilterChange();
  }

  onFilterChange() {
    this.onFilterChanged.emit(this.filterOptions);
  }

  private mapVoivodeshipsToSelectItem() {
    return this.voivodeships.map(v => (new SelectItem(v.id, v.voivodeshipName)));
  }

  private mapCategoriesToSelectItem() {
    return this.categories.map(c => (new SelectItem(c.name, c.name)));
  }
}
