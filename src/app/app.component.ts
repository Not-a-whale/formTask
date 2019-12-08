import { Component, ViewChild, ElementRef } from '@angular/core';
import { showStateTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [showStateTrigger]
})
export class AppComponent   {
  title = 'AwesomeFormTask';

  @ViewChild("modal", {static: false}) modal: ElementRef;
  @ViewChild("closeSharp", {static: false}) closeSharp: ElementRef;
  @ViewChild("continueButton", {static: false}) continueButton: ElementRef;

  formComponent: any;

  clickedState: boolean = false;

  clickedStateFunction(componentRef) {
    this.formComponent = componentRef;
    this.formComponent.formReseted.subscribe((data) => {
      this.clickedState = data;
    });
  }

  closedModal(event) {
    if(this.modal.nativeElement === event.target
       || this.closeSharp.nativeElement === event.target
       || this.continueButton.nativeElement === event.target) {
      this.clickedState = !this.clickedState;

      if(this.continueButton.nativeElement === event.target) {
        this.formComponent.resetForm(true);
      }
    }
  }
}
