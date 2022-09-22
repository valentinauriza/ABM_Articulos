import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloContenedorComponent } from './articulo-contenedor.component';

describe('ArticuloContenedorComponent', () => {
  let component: ArticuloContenedorComponent;
  let fixture: ComponentFixture<ArticuloContenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloContenedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
