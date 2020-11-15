import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeExperienceComponent } from './home-experience.component';

describe('HomeExperienceComponent', () => {
  let component: HomeExperienceComponent;
  let fixture: ComponentFixture<HomeExperienceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
