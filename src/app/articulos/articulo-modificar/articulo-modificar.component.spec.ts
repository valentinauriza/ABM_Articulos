import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloModificarComponent } from './articulo-modificar.component';

describe('ArticuloModificarComponent', () => {
  let component: ArticuloModificarComponent;
  let fixture: ComponentFixture<ArticuloModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloModificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
