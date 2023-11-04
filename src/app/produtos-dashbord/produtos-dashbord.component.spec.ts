import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosDashbordComponent } from './produtos-dashbord.component';

describe('ProdutosDashbordComponent', () => {
  let component: ProdutosDashbordComponent;
  let fixture: ComponentFixture<ProdutosDashbordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosDashbordComponent]
    });
    fixture = TestBed.createComponent(ProdutosDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
