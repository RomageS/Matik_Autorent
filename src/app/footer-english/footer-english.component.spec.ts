import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEnglishComponent } from './footer-english.component';

describe('FooterEnglishComponent', () => {
  let component: FooterEnglishComponent;
  let fixture: ComponentFixture<FooterEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterEnglishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
