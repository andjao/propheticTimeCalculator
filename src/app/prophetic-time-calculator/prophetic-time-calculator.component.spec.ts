import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropheticTimeCalculatorComponent } from './prophetic-time-calculator.component';

describe('PropheticTimeCalculatorComponent', () => {
  let component: PropheticTimeCalculatorComponent;
  let fixture: ComponentFixture<PropheticTimeCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropheticTimeCalculatorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropheticTimeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
