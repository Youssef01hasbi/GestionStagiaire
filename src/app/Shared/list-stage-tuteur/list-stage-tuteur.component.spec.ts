import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStageTuteurComponent } from './list-stage-tuteur.component';

describe('ListStageTuteurComponent', () => {
  let component: ListStageTuteurComponent;
  let fixture: ComponentFixture<ListStageTuteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListStageTuteurComponent]
    });
    fixture = TestBed.createComponent(ListStageTuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
