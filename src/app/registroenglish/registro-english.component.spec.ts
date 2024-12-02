import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEnglishComponent } from './registro-english.component';

describe('RegistroEnglishComponent', () => {
  let component: RegistroEnglishComponent;
  let fixture: ComponentFixture<RegistroEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroEnglishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
