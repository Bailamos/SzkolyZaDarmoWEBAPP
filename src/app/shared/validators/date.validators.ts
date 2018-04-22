import {AbstractControl} from "@angular/forms";

export class DateValidators {
  static validateRegistrationPeriod = (BeforeDateControl: string, AfterDateControl: string) => {
    return (control: AbstractControl) => {

      if (control.get(BeforeDateControl).value === null || control.get(AfterDateControl).value === null)
        return null
      let before = new Date(control.get(BeforeDateControl).value.formatted).getTime();
      let after = new Date(control.get(AfterDateControl).value.formatted).getTime();
      if (before > after) {
        return {'DatesValid': false}
      } else {
        return null
      }
    }
  }
}
