import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorOnLoadVehiclesComponent } from '../common/error-on-load-vehicles/error-on-load-vehicles.component';
import { LoaderComponent } from '../common/loader/loader.component';
import { VehicleBlockComponent } from '../common/vehicle-block/vehicle-block.component';
import Vehicle from '../../interfaces/Vehicle';
import { ErrorFromDatabase } from '../../interfaces/error-from-database';
import { VehiclesService } from '../../services/vehicles.service';
import { VehicleData } from '../../interfaces/my.types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles-page',
  standalone: true,
  imports: [ ErrorOnLoadVehiclesComponent, LoaderComponent, CommonModule, VehicleBlockComponent],
  templateUrl: './vehicles-page.component.html',
  styleUrl: './vehicles-page.component.scss'
})
export class VehiclesPageComponent {
  allVehiclesDataArray!: Vehicle[]; 
  getErrorFromDataBase!: ErrorFromDatabase;
  classOnVehicleContent: string = "d-flex w-100 justify-content-center"
  basePath!: VehicleData
  constructor( private _vehiclesService: VehiclesService, private _router: Router ) { }

  ngOnInit(): void {
    this.basePath = this.handlePath(this._router.url)
    this._vehiclesService.getNormalData({path: `/${this.basePath}/data`}).then((res: any) => {
      if(res.code){
        this.getErrorFromDataBase = res;
        return;
      }
      this.allVehiclesDataArray = res;
      this.classOnVehicleContent = "d-flex flex-wrap";
    }).catch(err => {
      this.getErrorFromDataBase = err;
    })
  }

  handlePath(path: string): VehicleData{
    switch(path){
      case "/":
        return "cars"
      case "/bikes":
        return "bikes"
      case "/hypercars":
        return "hypercars"
      case "/pick-ups":
        return "pickUps"
      case "/suvs":
        return "suvs"
      default:
        return "cars"
    }
  }
}
