import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEnglishComponent } from './perfil-english.component';

describe('PerfilComponent', () => {
  let component: PerfilEnglishComponent;
  let fixture: ComponentFixture<PerfilEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilEnglishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
