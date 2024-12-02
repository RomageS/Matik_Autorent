import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlotaEnglishComponent } from './flota-english.component';

describe('FlotaEnglishComponent', () => {
  let component: FlotaEnglishComponent;
  let fixture: ComponentFixture<FlotaEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlotaEnglishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlotaEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
