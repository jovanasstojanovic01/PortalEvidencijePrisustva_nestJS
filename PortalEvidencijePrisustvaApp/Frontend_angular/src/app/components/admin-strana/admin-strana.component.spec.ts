import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStranaComponent } from './admin-strana.component';

describe('AdminStranaComponent', () => {
  let component: AdminStranaComponent;
  let fixture: ComponentFixture<AdminStranaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminStranaComponent]
    });
    fixture = TestBed.createComponent(AdminStranaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
