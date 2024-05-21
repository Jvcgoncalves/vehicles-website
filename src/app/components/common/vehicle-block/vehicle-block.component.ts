import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import Vehicle from '../../../interfaces/Vehicle';
import { VehiclesService } from '../../../services/vehicles.service';
import { MatButtonModule } from "@angular/material/button";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { VehicleInfoDialogComponent } from './vehicle-info-dialog/vehicle-info-dialog.component';

@Component({
  selector: 'app-vehicle-block',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDialogModule, VehicleInfoDialogComponent],
  templateUrl: './vehicle-block.component.html',
  styleUrl: './vehicle-block.component.scss'
})
export class VehicleBlockComponent implements OnInit {
  @Input() vehicleData!: Vehicle;
  @Input() pathToGetImage!: string;
  imagePath!: string;
  constructor(private _vehiclesService: VehiclesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.imagePath = this._vehiclesService.getVehicleImagesUrl({path: `${this.pathToGetImage}?fileName=${this.vehicleData.image_path}`})
  }

  openDialog(){
    this.dialog.open(VehicleInfoDialogComponent, {
      data: {
        vehicleData: this.vehicleData,
        imagePath: this.imagePath
      },
      width: "80%",
      height: "80%"
    },);
  }
}
