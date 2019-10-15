import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnParkFormComponent } from './un-park-form.component';

describe('UnParkFormComponent', () => {
  let component: UnParkFormComponent;
  let fixture: ComponentFixture<UnParkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnParkFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnParkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
