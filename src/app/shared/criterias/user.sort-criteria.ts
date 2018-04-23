import {SortCriteria} from "./sort-criteria";

export class UserSortCriteria {
  public static criteria: SortCriteria[] = [
    {
      value: {sortBy: "LastUpdate", isSortAscending: true},
      label: "Data aktualizacji - rosnaco"
    },
    {
      value: {sortBy: "LastUpdate", isSortAscending: false},
      label: "Data aktualizacji - malejaco"
    },
  ]
}
