import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeTechnologiesComponent } from './home-technologies.component';

describe('HomeTechnologiesComponent', () => {
  let component: HomeTechnologiesComponent;
  let fixture: ComponentFixture<HomeTechnologiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTechnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
