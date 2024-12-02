import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosEnglishComponent } from './terminos-english.component';

describe('TerminosEnglishComponent', () => {
  let component: TerminosEnglishComponent;
  let fixture: ComponentFixture<TerminosEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TerminosEnglishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminosEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
