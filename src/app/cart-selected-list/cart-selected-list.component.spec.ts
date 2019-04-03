import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSelectedListComponent } from './cart-selected-list.component';

describe('CartSelectedListComponent', () => {
  let component: CartSelectedListComponent;
  let fixture: ComponentFixture<CartSelectedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartSelectedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSelectedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
