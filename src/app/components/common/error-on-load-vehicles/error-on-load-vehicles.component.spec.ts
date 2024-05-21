import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorOnLoadVehiclesComponent } from './error-on-load-vehicles.component';

describe('ErrorOnLoadVehiclesComponent', () => {
  let component: ErrorOnLoadVehiclesComponent;
  let fixture: ComponentFixture<ErrorOnLoadVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorOnLoadVehiclesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorOnLoadVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
