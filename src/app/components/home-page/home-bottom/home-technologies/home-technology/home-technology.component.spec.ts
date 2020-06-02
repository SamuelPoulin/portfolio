import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTechnologyComponent } from './home-technology.component';

describe('HomeTechnologyComponent', () => {
  let component: HomeTechnologyComponent;
  let fixture: ComponentFixture<HomeTechnologyComponent>;

  beforeEach(async(() => {
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
