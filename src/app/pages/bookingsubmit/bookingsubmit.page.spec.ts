import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingsubmitPage } from './bookingsubmit.page';

describe('BookingsubmitPage', () => {
  let component: BookingsubmitPage;
  let fixture: ComponentFixture<BookingsubmitPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookingsubmitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
