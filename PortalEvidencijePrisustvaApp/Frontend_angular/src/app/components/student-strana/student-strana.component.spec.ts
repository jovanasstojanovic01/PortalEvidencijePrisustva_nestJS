import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStranaComponent } from './student-strana.component';

describe('StudentStranaComponent', () => {
  let component: StudentStranaComponent;
  let fixture: ComponentFixture<StudentStranaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentStranaComponent]
    });
    fixture = TestBed.createComponent(StudentStranaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
