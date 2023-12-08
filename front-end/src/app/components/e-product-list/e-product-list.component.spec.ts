import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EProductListComponent } from './e-product-list.component';

describe('EProductListComponent', () => {
  let component: EProductListComponent;
  let fixture: ComponentFixture<EProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EProductListComponent]
    });
    fixture = TestBed.createComponent(EProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
