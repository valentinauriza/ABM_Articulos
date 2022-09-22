import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Articulo } from 'src/app/interfaces/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-articulo-contenedor',
  templateUrl: './articulo-contenedor.component.html',
  styleUrls: ['./articulo-contenedor.component.css']
})
export class ArticuloContenedorComponent implements OnInit, OnDestroy {
  lista: Articulo[];
  articulo: Articulo;

  idSeleccionado: string;

  formAlta: boolean = false;
  formMod: boolean = false;
  private subs = new Subscription();

  constructor(private artServ: ArticuloService) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {

  }

  mostrarFormAlta(visible: boolean) {
    this.formAlta = visible;
    this.formMod = false;
  }

  mostrarFormMod(id:string) {
    this.formMod = true;
    this.formAlta = false;

    this.idSeleccionado = id;
  }

  actualizarListado() {
    this.subs.add(
      this.artServ.obtenerArticulos().subscribe({
        next: (list: Articulo[]) => {
          this.lista = list;
        },
        error: () => {
          alert('Error');
        }
      })
    )
  }
}
