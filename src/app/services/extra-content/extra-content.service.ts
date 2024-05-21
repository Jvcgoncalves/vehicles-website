import { Injectable } from '@angular/core';
import { AvailablePages } from '../../interfaces/AvailablePages';

@Injectable({
  providedIn: 'root'
})
export class ExtraContentService {

  availablePages: AvailablePages[] = [
    {
      imagePath: "../../../../assets/extra-content/cars.jpg",
      pageTitle: "Carros",
      pagePath: "/"
    },
    {
      imagePath: "../../../../assets/extra-content/bikes.jpg",
      pageTitle: "Motos",
      pagePath: "/bikes"
    },
    {
      imagePath: "../../../../assets/extra-content/pick-ups.jpg",
      pageTitle: "Pick ups",
      pagePath: "/pick-ups"
    },
    {
      imagePath: "../../../../assets/extra-content/supercars.jpg",
      pageTitle: "Supercarros",
      pagePath: "/hypercars"
    },
    {
      imagePath: "../../../../assets/extra-content/suvs.jpg",
      pageTitle: "Suvs",
      pagePath: "/suvs"
    }
  ]
  constructor() { }
}
