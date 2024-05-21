import { Injectable } from '@angular/core';
import Vehicle from '../interfaces/Vehicle';
import { ErrorFromDatabase } from '../interfaces/error-from-database';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  url: string = "https://vehicle-site-backend.vercel.app"

  constructor() { }

  getNormalData = async ({path} :{path: string}): Promise<Vehicle | ErrorFromDatabase> => {
    const response = await fetch(`${this.url}${path}`)

    return response.json();
  }

  getVehicleImagesUrl = ({ path }: { path: string }): string => {
    return `${this.url}${path}`
  }
}
