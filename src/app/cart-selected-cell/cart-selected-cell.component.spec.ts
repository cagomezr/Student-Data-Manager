import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSelectedCellComponent } from './cart-selected-cell.component';

describe('CartSelectedCellComponent', () => {
  let component: CartSelectedCellComponent;
  let fixture: ComponentFixture<CartSelectedCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartSelectedCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSelectedCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
