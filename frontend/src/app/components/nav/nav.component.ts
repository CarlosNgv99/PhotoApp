import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from '../../services/photo-service.service';
interface htmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  photoSelected: string | ArrayBuffer;
  file: File;
  constructor(private photoService: PhotoServiceService) { }

  ngOnInit(): void {
  }

  onPhoto(event: htmlInputEvent) {
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        this.photoSelected = reader.result;
      }
      reader.readAsDataURL(this.file);
    }
  }

  onSubmit(title: HTMLInputElement, description: HTMLTextAreaElement){
      this.photoService.createPhoto(title.value, description.value, this.file)
      .subscribe( res => console.log(res), err => console.log(err))
  }

}
