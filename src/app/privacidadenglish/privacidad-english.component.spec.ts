import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacidadEnglishComponent } from './privacidad-english.component';

describe('PrivacidadEnglishComponent', () => {
  let component: PrivacidadEnglishComponent;
  let fixture: ComponentFixture<PrivacidadEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivacidadEnglishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacidadEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
