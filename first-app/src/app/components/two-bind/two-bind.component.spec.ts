import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoBindComponent } from './two-bind.component';

describe('TwoBindComponent', () => {
  let component: TwoBindComponent;
  let fixture: ComponentFixture<TwoBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoBindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
