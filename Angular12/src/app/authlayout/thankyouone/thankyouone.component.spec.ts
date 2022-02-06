import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouoneComponent } from './thankyouone.component';

describe('ThankyouoneComponent', () => {
  let component: ThankyouoneComponent;
  let fixture: ComponentFixture<ThankyouoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankyouoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
