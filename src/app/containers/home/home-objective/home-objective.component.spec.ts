import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeObjectiveComponent } from './home-objective.component';

describe('HomeObjectiveComponent', () => {
  let component: HomeObjectiveComponent;
  let fixture: ComponentFixture<HomeObjectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeObjectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
