import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWinnnowComponent } from './login-winnnow.component';

describe('LoginWinnnowComponent', () => {
  let component: LoginWinnnowComponent;
  let fixture: ComponentFixture<LoginWinnnowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginWinnnowComponent]
    });
    fixture = TestBed.createComponent(LoginWinnnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
