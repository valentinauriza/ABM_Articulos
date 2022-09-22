import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Articulo } from 'src/app/interfaces/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-articulo-lista',
  templateUrl: './articulo-lista.component.html',
  styleUrls: ['./articulo-lista.component.css']
})
export class ArticuloListaComponent implements OnInit, OnDestroy {
  @Input() listado: Articulo[];
  @Output() onAlta = new EventEmitter();
  @Output() onModificar = new EventEmitter<string>();

  private subs = new Subscription();

  constructor(private artServ: ArticuloService) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.cargarListado();
  }

  cargarListado() {
    this.subs.add(
      this.artServ.obtenerArticulos().subscribe({
        next: (list: Articulo[]) => {
          this.listado = list;
        },
        error: () => {
          alert('Error');
        }
      })
    )
  }

  altaArticulo() {
    this.onAlta.emit();
  }

  modificar(articulo:Articulo) {
    this.onModificar.emit(articulo.id);
  }
}