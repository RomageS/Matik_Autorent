import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionEnglishComponent } from './sesion-english.component';

describe('SesionEnglishComponent', () => {
  let component: SesionEnglishComponent;
  let fixture: ComponentFixture<SesionEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SesionEnglishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesionEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
