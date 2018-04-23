import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ResourcesService} from "../../shared/services/resources.service";

@Component({
  selector: 'app-users-filter',
  templateUrl: './users-filter.component.html',
  styleUrls: ['./users-filter.component.css']
})
export class UsersFilterComponent implements OnInit {

  @Output()
  public filterChanged = new EventEmitter<{}>();

  private categories;
  private marketStatuses;
  private voivodeships;
  public marketStatusesSelectItems = [];

  public voivodeshipsSelectItems = [];
  public categoriesSelectItems = [];

  public selectedFilters = {
    voivodeships: [],
    categories: [],
    marketStatuses: [],
    ageFrom: null,
    ageTo: null
  }

  constructor(
    private resourceService: ResourcesService) { }

  ngOnInit() {
    this.resourceService.getTrainingParameters().subscribe(
      (res) => {
        this.categories = res.categories;
        this.marketStatuses = res.marketStatuses;
        this.voivodeships = res.voivodeships;

        this.mapMarketStatusesToSelectItem();
        this.mapVoivodeshipsToSelectItem();
        this.mapCategoriesToSelectItem();
      }
    )
  }

  onVoivodeshipsSelectionChange(event) {
    this.selectedFilters.voivodeships = event;
    this.filterChanged.next(this.selectedFilters);
  }

  onCategoriesSelectionChange(event) {
    this.selectedFilters.categories = event;
    this.filterChanged.next(this.selectedFilters);
  }

  onStatusesSelectionChange(event) {
    this.selectedFilters.marketStatuses = event;
    this.filterChanged.next(this.selectedFilters);
  }

  onAgeFromChange($event) {
    this.filterChanged.next(this.selectedFilters);
  }

  onAgeToChange(event) {
    this.filterChanged.next(this.selectedFilters);
  }

  public mapMarketStatusesToSelectItem() {
    this.marketStatusesSelectItems = this.marketStatuses.map(m => ({id: m.id, itemName: m.status}));
  }

  public mapVoivodeshipsToSelectItem() {
    this.voivodeshipsSelectItems = this.voivodeships.map(m => ({id: m.id, itemName: m.voivodeshipName}));
  }

  public mapCategoriesToSelectItem() {
    this.categoriesSelectItems = this.categories.map(m => ({id: m.name, itemName: m.name}));
  }
}
