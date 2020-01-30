import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';




@Injectable({
    providedIn: 'root'
})

export class storageService {

    public componentChanged = new Subject<string>();

    public isFormValid = new Subject<boolean>();

    public formReseted = new Subject<boolean>();


    public savedForm: {
        city: string,
        code: number,
        country: string,
        email: string,
        firstName: string,
        id: string,
        lastName: string,
        phone: number,
        state: string;
      };

    componentActive(componentName: string) {
        this.componentChanged.next(componentName);
    }

    formValidation(isVal: boolean) {
        this.isFormValid.next(isVal);
    }

}