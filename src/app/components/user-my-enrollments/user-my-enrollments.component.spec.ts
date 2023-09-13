import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyEnrollmentsComponent } from './user-my-enrollments.component';

describe('UserMyEnrollmentsComponent', () => {
  let component: UserMyEnrollmentsComponent;
  let fixture: ComponentFixture<UserMyEnrollmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMyEnrollmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMyEnrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
