import { Component, OnInit, Inject } from '@angular/core';
import { PhotoServiceService } from '../../services/photo-service.service';
import { baseURL } from '../../shared/baseURL';
import { Router } from '@angular/router';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos = [];
  

  constructor( private photoService: PhotoServiceService, @Inject('baseURL') private baseUrl,
  private router: Router) { }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(res => {
      this.photos = res
      console.log(this.photos)
    },
    err => {
      console.log(err);
    })
  }

  onSelect(id:string) {
    this.router.navigate(['/photos/' + id]);
    console.log(id);
  }

}
