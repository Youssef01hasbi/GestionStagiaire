import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardStagiaireComponent } from './board-stagiaire.component';

describe('BoardStagiaireComponent', () => {
  let component: BoardStagiaireComponent;
  let fixture: ComponentFixture<BoardStagiaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardStagiaireComponent]
    });
    fixture = TestBed.createComponent(BoardStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
