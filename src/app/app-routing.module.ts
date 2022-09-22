import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloContenedorComponent } from './articulos/articulo-contenedor/articulo-contenedor.component';
import { ArticuloListaComponent } from './articulos/articulo-lista/articulo-lista.component';

const routes: Routes = [
  { path: 'contenedor', component: ArticuloContenedorComponent },
  { path: 'lista', component: ArticuloListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
