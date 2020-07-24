import { PhotoPrevComponent } from './components/photo-prev/photo-prev.component';
import { HomeComponent } from './components/home/home.component';
import { PhotosComponent } from './components/photos/photos.component';
export const routes = [
  {
    path: 'photos',
    component: PhotosComponent
  },
  {
    path: 'photos/:id',
    component: PhotoPrevComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
