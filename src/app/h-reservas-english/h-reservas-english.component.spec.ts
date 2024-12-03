import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HReservasEnglishComponent } from './h-reservas-english.component';

describe('HReservasComponent', () => {
  let component: HReservasEnglishComponent;
  let fixture: ComponentFixture<HReservasEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HReservasEnglishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HReservasEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
