import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEnglishComponent } from './home-english.component';

describe('HomeEnglishComponent', () => {
  let component: HomeEnglishComponent;
  let fixture: ComponentFixture<HomeEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeEnglishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
