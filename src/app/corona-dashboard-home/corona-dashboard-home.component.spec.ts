import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaDashboardHomeComponent } from './corona-dashboard-home.component';

describe('CoronaDashboardHomeComponent', () => {
  let component: CoronaDashboardHomeComponent;
  let fixture: ComponentFixture<CoronaDashboardHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaDashboardHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaDashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
