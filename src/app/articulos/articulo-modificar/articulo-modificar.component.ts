import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Articulo } from 'src/app/interfaces/articulo';
import { Categoria } from 'src/app/interfaces/categoria';
import { ArticuloService } from 'src/app/services/articulo.service';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-articulo-modificar',
  templateUrl: './articulo-modificar.component.html',
  styleUrls: ['./articulo-modificar.component.css']
})
export class ArticuloModificarComponent implements OnInit {
  articulo = {} as Articulo;
  listaCat: Categoria[] = [];
  private subs = new Subscription();

  @Input() id: string;
  @Output() onNuevoArticulo = new EventEmitter();
  @Output() onCancelar = new EventEmitter();

  constructor(private artServ: ArticuloService, private catServ: CategoriaService) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.subs.add(
      this.artServ.obtenerArticulosPorId(this.id).subscribe({
        next: (art: Articulo) => {
          this.articulo = art;
        },
        error: () => {
          alert('Error');
        }
      })
    );

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

  modificar() {
    this.subs.add(
      this.artServ.modificar(this.articulo).subscribe({
        next: (art: Articulo) => {
          this.onNuevoArticulo.emit();
          alert('Modificando');
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
