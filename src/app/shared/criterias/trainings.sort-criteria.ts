import {SortCriteria} from './sort-criteria';

export class TrainingSortCriteria {
  public static criteria: SortCriteria[] = [
    {
      value: {sortBy: "InsertDate", isSortAscending: false},
      label: "Data wstawienia - od najnowszych"
    },
    {
      value: {sortBy: "InsertDate", isSortAscending: true},
      label: "Data wstawienia - od najstarszych"
    },
    {
      value: {sortBy: "Category", isSortAscending: true},
      label: "Kategoria - rosnaco"
    },
    {
      value: {sortBy: "Category", isSortAscending: false},
      label: "Kategoria - malejaco"
    },
    {
      value: {sortBy: "RegisterTo", isSortAscending: true},
      label: "Termin zakończenia rekrutacji - rosnaco"
    },
    {
      value: {sortBy: "RegisterTo", isSortAscending: false},
      label: "Termin zakończenia rekrutacji - malejaco"
    },
    {
      value: {sortBy: "Localization", isSortAscending: true},
      label: "Wojewodztwo - rosnaca"
    },
    {
      value: {sortBy: "Localization", isSortAscending: false},
      label: "Wojewodztwo - malejaco"
    }
  ]
}
