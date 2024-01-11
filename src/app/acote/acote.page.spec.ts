import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcotePage } from './acote.page';

describe('AcotePage', () => {
  let component: AcotePage;
  let fixture: ComponentFixture<AcotePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AcotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
