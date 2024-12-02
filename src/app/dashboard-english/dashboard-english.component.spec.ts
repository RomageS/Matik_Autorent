import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEnglishComponent } from './dashboard-english.component';

describe('DashboardEnglishComponent', () => {
  let component: DashboardEnglishComponent;
  let fixture: ComponentFixture<DashboardEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardEnglishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
