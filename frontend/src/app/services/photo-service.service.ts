import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';
import { Observable } from 'rxjs';
import { IPhoto } from '../interfaces/photo';

@Injectable({ 
  providedIn: 'root'
})
export class PhotoServiceService {

  constructor(private http: HttpClient) { }

  createPhoto(title: string, description:string, photo: File) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', photo);
    return this.http.post(baseURL + 'api/photos', fd);
  }

  getPhotos(){
    return this.http.get<IPhoto[]>(baseURL + 'api/photos');
  }

  getPhoto(id) {
    return this.http.get<IPhoto>(baseURL + 'api/photos/' + id);
  }

}
