import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaOverviewComponent } from './corona-overview.component';

describe('CoronaOverviewComponent', () => {
  let component: CoronaOverviewComponent;
  let fixture: ComponentFixture<CoronaOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
