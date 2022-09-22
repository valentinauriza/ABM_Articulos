import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticuloAltaComponent } from './articulos/articulo-alta/articulo-alta.component';
import { ArticuloListaComponent } from './articulos/articulo-lista/articulo-lista.component';
import { ArticuloBajaComponent } from './articulos/articulo-baja/articulo-baja.component';
import { ArticuloModificarComponent } from './articulos/articulo-modificar/articulo-modificar.component';
import { ArticuloService } from './services/articulo.service';
import { CategoriaService } from './services/categoria.service';
import { CategoriaListadoComponent } from './categorias/categoria-listado/categoria-listado.component';
import { ArticuloContenedorComponent } from './articulos/articulo-contenedor/articulo-contenedor.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticuloAltaComponent,
    ArticuloListaComponent,
    ArticuloBajaComponent,
    ArticuloModificarComponent,
    CategoriaListadoComponent,
    ArticuloContenedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ArticuloService, CategoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
