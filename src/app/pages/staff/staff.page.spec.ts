import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffPage } from './staff.page';

describe('StaffPage', () => {
  let component: StaffPage;
  let fixture: ComponentFixture<StaffPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StaffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
