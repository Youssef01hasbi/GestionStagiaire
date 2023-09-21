import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiaireEncadrantComponent } from './stagiaire-encadrant.component';

describe('StagiaireEncadrantComponent', () => {
  let component: StagiaireEncadrantComponent;
  let fixture: ComponentFixture<StagiaireEncadrantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StagiaireEncadrantComponent]
    });
    fixture = TestBed.createComponent(StagiaireEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
