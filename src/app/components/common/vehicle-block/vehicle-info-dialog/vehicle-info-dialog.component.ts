import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import Vehicle from '../../../../interfaces/Vehicle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicle-info-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule],
  templateUrl: './vehicle-info-dialog.component.html',
  styleUrl: './vehicle-info-dialog.component.scss'
})
export class VehicleInfoDialogComponent {
  image!: string;
  vehicleData!: Vehicle

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.vehicleData = data.vehicleData
    this.image = data.imagePath
  }
}
