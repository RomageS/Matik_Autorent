import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HReservasComponent } from './h-reservas.component';

describe('HReservasComponent', () => {
  let component: HReservasComponent;
  let fixture: ComponentFixture<HReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HReservasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
