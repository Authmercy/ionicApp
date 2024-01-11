import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OngletPage } from './onglet.page';

describe('OngletPage', () => {
  let component: OngletPage;
  let fixture: ComponentFixture<OngletPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OngletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
