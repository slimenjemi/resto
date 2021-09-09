import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceChefsComponent } from './experience-chefs.component';

describe('ExperienceChefsComponent', () => {
  let component: ExperienceChefsComponent;
  let fixture: ComponentFixture<ExperienceChefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceChefsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceChefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
