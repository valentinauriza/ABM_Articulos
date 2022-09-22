import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Articulo } from 'src/app/interfaces/articulo';
import { Categoria } from 'src/app/interfaces/categoria';
import { ArticuloService } from 'src/app/services/articulo.service';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-articulo-alta',
  templateUrl: './articulo-alta.component.html',
  styleUrls: ['./articulo-alta.component.css']
})
export class ArticuloAltaComponent implements OnInit, OnDestroy {
  articulo = {} as Articulo;
  listaCat: Categoria[] = [];
  private subs = new Subscription();

  @Output() onNuevoArticulo = new EventEmitter();
  @Output() onCancelar = new EventEmitter();

  constructor(private artServ: ArticuloService, private catServ: CategoriaService) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.cargarCombo();
  }

  cargarCombo() {
    this.subs.add(
      this.catServ.obtenerCategorias().subscribe({
        next: (lista: Categoria[]) => {
          this.listaCat = lista;
        },
        error: () => {
          alert('Error');
        }
      })
    )
  }

  agregar() {
    this.subs.add(
      this.artServ.alta(this.articulo).subscribe({
        next: (art: Articulo) => {
          this.onNuevoArticulo.emit();
          alert('Agregando');
        },
        error: () => {
          alert('Error');
        }
      })
    )
  }

  cancelar() {
    this.onCancelar.emit();
  }
}
