import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEnglishComponent } from './header-english.component';

describe('HeaderEnglishComponent', () => {
  let component: HeaderEnglishComponent;
  let fixture: ComponentFixture<HeaderEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderEnglishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
