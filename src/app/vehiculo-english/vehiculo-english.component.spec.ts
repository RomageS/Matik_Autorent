import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoEnglishComponent } from './vehiculo-english.component';

describe('VehiculoEnglishComponent', () => {
  let component: VehiculoEnglishComponent;
  let fixture: ComponentFixture<VehiculoEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehiculoEnglishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculoEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
