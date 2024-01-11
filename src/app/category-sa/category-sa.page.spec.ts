import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategorySAPage } from './category-sa.page';

describe('CategorySAPage', () => {
  let component: CategorySAPage;
  let fixture: ComponentFixture<CategorySAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategorySAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
