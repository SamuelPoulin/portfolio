import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeTechnologyComponent } from './home-technology.component';

describe('HomeTechnologyComponent', () => {
  let component: HomeTechnologyComponent;
  let fixture: ComponentFixture<HomeTechnologyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
