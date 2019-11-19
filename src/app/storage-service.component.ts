import { Injectable } from "@angular/core";




@Injectable({
    providedIn: 'root'
})

export class storageService {

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

}