import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhatComponent } from './home-what.component';

describe('HomeWhatComponent', () => {
  let component: HomeWhatComponent;
  let fixture: ComponentFixture<HomeWhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWhatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
