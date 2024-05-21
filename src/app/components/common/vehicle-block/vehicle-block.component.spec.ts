import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleBlockComponent } from './vehicle-block.component';

describe('VehicleBlockComponent', () => {
  let component: VehicleBlockComponent;
  let fixture: ComponentFixture<VehicleBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
