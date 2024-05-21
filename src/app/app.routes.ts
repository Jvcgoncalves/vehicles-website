import { Routes } from '@angular/router';

import { VehiclesPageComponent } from './components/vehicles-page/vehicles-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: "",
    component: VehiclesPageComponent,
    title: "Carros",
  },
  {
    path: "suvs",
    component: VehiclesPageComponent,
    title: "Suvs",
  },
  {
    path: "bikes",
    component: VehiclesPageComponent,
    title: "Motos",
  },
  {
    path: "pick-ups",
    component: VehiclesPageComponent,
    title: "Pick ups",
  },
  {
    path: "hypercars",
    component: VehiclesPageComponent,
    title: "Super carros",
  },
  { 
    path: '**', pathMatch: 'full',  
    component: PageNotFoundComponent
  }
];
