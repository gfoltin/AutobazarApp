import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListUserComponent } from './car-list-user.component';

describe('CarListUserComponent', () => {
  let component: CarListUserComponent;
  let fixture: ComponentFixture<CarListUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarListUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
