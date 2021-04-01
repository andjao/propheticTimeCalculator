import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersiclesComponent } from './versicles.component';

describe('VersiclesComponent', () => {
  let component: VersiclesComponent;
  let fixture: ComponentFixture<VersiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VersiclesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
