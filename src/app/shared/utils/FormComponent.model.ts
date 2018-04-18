import {FormGroup} from "@angular/forms";
import {EventEmitter, Output} from "@angular/core";

export class FormComponent {

  @Output() onFormSubmit = new EventEmitter<any>();

  form: FormGroup;

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
}
