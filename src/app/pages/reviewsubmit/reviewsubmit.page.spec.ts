import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewsubmitPage } from './reviewsubmit.page';

describe('ReviewsubmitPage', () => {
  let component: ReviewsubmitPage;
  let fixture: ComponentFixture<ReviewsubmitPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReviewsubmitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
