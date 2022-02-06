import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmoenyComponent } from './addmoeny.component';

describe('AddmoenyComponent', () => {
  let component: AddmoenyComponent;
  let fixture: ComponentFixture<AddmoenyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmoenyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmoenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
