import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaEnglishComponent } from './ayuda-english.component';

describe('AyudaEnglishComponent', () => {
  let component: AyudaEnglishComponent;
  let fixture: ComponentFixture<AyudaEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AyudaEnglishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AyudaEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
