import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-basic-error-view',
  templateUrl: './basic-error-view.component.html',
  styleUrls: ['./basic-error-view.component.css']
})
export class BasicErrorViewComponent implements OnInit {
  @Input() errorMsg: string;
  @Input() displayError: boolean;

  ngOnInit() {
  }
}
