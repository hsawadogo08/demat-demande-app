import { Routes } from '@angular/router';
import {HomeComponent} from "./core/home/home.component";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/home/home.component').then( m => m.HomeComponent)
  },
  {
    path: 'demandes',
    loadChildren: () => import('./features/demandes/demandes.routes').then( m => m.routes)
  }
];
