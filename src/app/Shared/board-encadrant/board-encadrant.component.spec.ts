import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardEncadrantComponent } from './board-encadrant.component';

describe('BoardEncadrantComponent', () => {
  let component: BoardEncadrantComponent;
  let fixture: ComponentFixture<BoardEncadrantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardEncadrantComponent]
    });
    fixture = TestBed.createComponent(BoardEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
