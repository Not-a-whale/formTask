import { Component } from '@angular/core';
import { storageService } from 'src/app/storage-service.component';


@Component({
  selector: 'app-form-logined-user',
  templateUrl: './form-logined-user.component.html',
  styleUrls: ['./form-logined-user.component.scss']
})
export class FormLoginedUserComponent {

constructor (private storageService: storageService) {}

activeUserFName = this.storageService.savedForm.firstName;
activeUserLName = this.storageService.savedForm.lastName;

}
