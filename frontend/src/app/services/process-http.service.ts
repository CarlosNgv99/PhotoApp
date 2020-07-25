import { Injectable } from '@angular/core';
import { throwError } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProcessHttpService {

  constructor() { }

  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent) {
      console.log('An error has occured:', error.error.message);
    }
    else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    return throwError('Something bad happened; please try again later.');

  }

}
