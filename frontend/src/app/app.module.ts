import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PhotoPrevComponent } from './components/photo-prev/photo-prev.component';
import { PhotoServiceService } from './services/photo-service.service';
import { PhotosComponent } from './components/photos/photos.component';


import {baseURL} from './shared/baseURL';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PhotoPrevComponent,
    HomeComponent,
    PhotosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    PhotoServiceService,
    {
      provide: 'baseURL',
      useValue: baseURL
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
