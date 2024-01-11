import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryCIPage } from './category-ci.page';

describe('CategoryCIPage', () => {
  let component: CategoryCIPage;
  let fixture: ComponentFixture<CategoryCIPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoryCIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
