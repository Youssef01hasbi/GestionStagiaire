import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPostulerComponent } from './all-postuler.component';

describe('AllPostulerComponent', () => {
  let component: AllPostulerComponent;
  let fixture: ComponentFixture<AllPostulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllPostulerComponent]
    });
    fixture = TestBed.createComponent(AllPostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
