import { Component, OnInit } from "@angular/core";
import { storageService } from "../storage-service.component";
import { Subscription } from "rxjs";
import { componentChangedState } from "./animations";
import { Router } from "@angular/router";

@Component({
  selector: "app-form-slider",
  templateUrl: "./form-slider.component.html",
  styleUrls: ["./form-slider.component.scss"],
  animations: [componentChangedState]
})
export class FormSliderComponent implements OnInit {
  componentActiveName: string = "default";
  componentChangedSub: Subscription;

  formValidity: boolean;
  isLoginFormValidSub: Subscription;

  constructor(private storageService: storageService, private router: Router) {}

  ngOnInit() {
    this.componentChangedSub = this.storageService.componentChanged.subscribe(
      componentName => {
        this.componentActiveName = componentName;
        console.log(this.componentActiveName);
      }
    );

    this.isLoginFormValidSub = this.storageService.isFormValid.subscribe(
      isVal => {
        this.formValidity = isVal;
      }
    );
  }

  moveUp() {
    if (this.formValidity) {
      this.router.navigate(["/form"]);

      this.storageService.componentActive("default");
    }
  }

  moveDown() {
    if (this.formValidity) {
      this.router.navigate(["/logined-user"]);

      this.storageService.componentActive("loginedUser");
    }
  }
}
