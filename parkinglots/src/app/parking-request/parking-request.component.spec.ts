import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingRequestComponent } from './parking-request.component';

describe('ParkingRequestComponent', () => {
  let component: ParkingRequestComponent;
  let fixture: ComponentFixture<ParkingRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
