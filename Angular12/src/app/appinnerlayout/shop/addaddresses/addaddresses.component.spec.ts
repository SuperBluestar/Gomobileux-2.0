import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaddressesComponent } from './addaddresses.component';

describe('AddaddressesComponent', () => {
  let component: AddaddressesComponent;
  let fixture: ComponentFixture<AddaddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddaddressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
