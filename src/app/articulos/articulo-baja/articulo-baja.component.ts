import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Articulo } from 'src/app/interfaces/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-articulo-baja',
  templateUrl: './articulo-baja.component.html',
  styleUrls: ['./articulo-baja.component.css']
})
export class ArticuloBajaComponent implements OnInit, OnDestroy {
  private subs = new Subscription();

  @Output() onEliminar = new EventEmitter();
  @Input() articulo: Articulo;

  constructor(private artServ: ArticuloService) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
  }

  eliminar() {
    this.subs.add(
      this.artServ.baja(this.articulo).subscribe({
        next: () => {
          this.onEliminar.emit();
          alert('Eliminando a ' + this.articulo.nombre);
        },
        error: () => {
          alert('Error');
        }
      })
    )
  }
}
