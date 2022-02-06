import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopThankyouComponent } from './thankyou.component';

describe('ShopThankyouComponent', () => {
  let component: ShopThankyouComponent;
  let fixture: ComponentFixture<ShopThankyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopThankyouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
