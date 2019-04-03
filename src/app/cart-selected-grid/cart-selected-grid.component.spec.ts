import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSelectedGridComponent } from './cart-selected-grid.component';

describe('CartSelectedGridComponent', () => {
  let component: CartSelectedGridComponent;
  let fixture: ComponentFixture<CartSelectedGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartSelectedGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSelectedGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
