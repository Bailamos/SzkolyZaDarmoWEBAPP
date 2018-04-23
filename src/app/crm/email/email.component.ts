import {Component, OnDestroy, OnInit} from '@angular/core';
import {EmailService} from "../../shared/services/email.service";
import {FormComponent} from "../../shared/utils/FormComponent.model";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SendMessageResource} from "../../shared/models/resources/send-message-resource";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent extends FormComponent implements OnInit, OnDestroy {
  public receivers: string[];

  public sending: boolean = false;
  public sended: boolean = false;
  public subscription;

  constructor(private emailService: EmailService) {
    super();
  }

  ngOnInit() {
    this.receivers = this.emailService.getReceivers().splice(0);

    this.subscription = this.emailService.receiversChanged.subscribe(
      (data) => {
        this.receivers = data;
        this.form.patchValue({'receiver': this.receivers});
      }
    )
    this.form = new FormGroup({
      'receiver': new FormControl({value: this.receivers, disabled: true}, Validators.required),
      'message': new FormControl(null, Validators.required)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.sending = true;
    this.sended = false;
    this.emailService.sendMail(this.mapFormToSendMessageResource()).subscribe(
      (res) => {
        this.sending = false;
        this.sended = true;
      }
    )
  }

  mapFormToSendMessageResource() {
    var sendMessageResource = new SendMessageResource();
    sendMessageResource.message = this.form.value.message;
    sendMessageResource.subject = "tmp";
    sendMessageResource.receivers = this.receivers;
    return sendMessageResource;
  }

}
