import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';
import { Observable } from 'rxjs';
import { IPhoto } from '../interfaces/photo';
import { catchError } from 'rxjs/operators';
import { ProcessHttpService } from '../services/process-http.service'
@Injectable({ 
  providedIn: 'root'
})
export class PhotoServiceService {

  constructor(private http: HttpClient, private httpService: ProcessHttpService) { }

  createPhoto(title: string, description:string, photo: File) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', photo);
    return this.http.post(baseURL + 'api/photos', fd);
  }

  getPhotos(): Observable<IPhoto[]>{
    return this.http.get<IPhoto[]>(baseURL + 'api/photos')
    .pipe(catchError(this.httpService.handleError));

  }

  getPhoto(id:string): Observable<IPhoto> {
    return this.http.get<IPhoto>(baseURL + 'api/photos/' + id)
    .pipe(catchError(this.httpService.handleError));
  }

  deletePhoto(id: string): Observable<IPhoto> {
    return this.http.delete<IPhoto>(baseURL + 'api/photos/' + id);
  }

}
