import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PhotoPrevComponent } from './components/photo-prev/photo-prev.component';
import { HomeComponent } from './components/home/home.component';

export const routes = [
  {
    path: 'photos',
    component: PhotoListComponent,
  },
  {
    path: 'photos/new',
    component: PhotoFormComponent,
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
