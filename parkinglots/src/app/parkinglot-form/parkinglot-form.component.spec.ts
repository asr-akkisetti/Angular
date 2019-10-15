import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkinglotFormComponent } from './parkinglot-form.component';

describe('ParkinglotFormComponent', () => {
  let component: ParkinglotFormComponent;
  let fixture: ComponentFixture<ParkinglotFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkinglotFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkinglotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
