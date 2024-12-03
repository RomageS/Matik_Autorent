import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEnglishComponent } from './usuario-english.component';

describe('UsuarioEnglishComponent', () => {
  let component: UsuarioEnglishComponent;
  let fixture: ComponentFixture<UsuarioEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioEnglishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
