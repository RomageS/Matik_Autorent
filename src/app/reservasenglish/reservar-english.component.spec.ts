import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarEnglishComponent } from './reservar-english.component';

describe('ReservarEnglishComponent', () => {
  let component: ReservarEnglishComponent;
  let fixture: ComponentFixture<ReservarEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservarEnglishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservarEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
