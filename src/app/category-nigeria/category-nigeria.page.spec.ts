import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryNigeriaPage } from './category-nigeria.page';

describe('CategoryNigeriaPage', () => {
  let component: CategoryNigeriaPage;
  let fixture: ComponentFixture<CategoryNigeriaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoryNigeriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
