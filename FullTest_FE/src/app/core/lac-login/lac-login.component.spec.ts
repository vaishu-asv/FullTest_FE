import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LacLoginComponent } from './lac-login.component';

describe('LacLoginComponent', () => {
  let component: LacLoginComponent;
  let fixture: ComponentFixture<LacLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LacLoginComponent]
    });
    fixture = TestBed.createComponent(LacLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
