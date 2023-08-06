import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculesOverviewComponent } from './molecules-overview.component';

describe('MoleculesOverviewComponent', () => {
  let component: MoleculesOverviewComponent;
  let fixture: ComponentFixture<MoleculesOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoleculesOverviewComponent]
    });
    fixture = TestBed.createComponent(MoleculesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
