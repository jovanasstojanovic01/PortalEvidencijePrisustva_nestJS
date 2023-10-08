import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorStranaComponent } from './profesor-strana.component';

describe('ProfesorStranaComponent', () => {
  let component: ProfesorStranaComponent;
  let fixture: ComponentFixture<ProfesorStranaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesorStranaComponent]
    });
    fixture = TestBed.createComponent(ProfesorStranaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
