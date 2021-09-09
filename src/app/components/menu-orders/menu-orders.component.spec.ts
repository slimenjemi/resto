import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOrdersComponent } from './menu-orders.component';

describe('MenuOrdersComponent', () => {
  let component: MenuOrdersComponent;
  let fixture: ComponentFixture<MenuOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
