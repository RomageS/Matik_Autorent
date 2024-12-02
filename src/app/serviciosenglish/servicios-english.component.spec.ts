import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosEnglishComponent } from './servicios-english.component';

describe('ServiciosEnglishComponent', () => {
  let component: ServiciosEnglishComponent;
  let fixture: ComponentFixture<ServiciosEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiciosEnglishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
