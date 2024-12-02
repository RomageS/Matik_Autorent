import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionEnglishComponent } from './ubicacion-english.component';

describe('UbicacionEnglishComponent', () => {
  let component: UbicacionEnglishComponent;
  let fixture: ComponentFixture<UbicacionEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UbicacionEnglishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbicacionEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
