import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreStagiaireComponent } from './registre-stagiaire.component';

describe('RegistreStagiaireComponent', () => {
  let component: RegistreStagiaireComponent;
  let fixture: ComponentFixture<RegistreStagiaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistreStagiaireComponent]
    });
    fixture = TestBed.createComponent(RegistreStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
