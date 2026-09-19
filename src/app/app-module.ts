import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpperCasePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
//import { HeroesList } from './heroes/heroes-list/heroes-list';
//import { HeroesFilterPipe } from './heroes/heroes-filter-pipe';
//import { OperaBas } from './formulario/opera-bas/opera-bas';
//import { OperaDist } from './formulario/opera-dist/opera-dist';
import { Figuras } from './formulario/figuras/figuras';
import { Palindromo } from './formulario/palindromo/palindromo';
import { TriangulosPuntos } from './formulario/triangulos-puntos/triangulos-puntos';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, FormsModule, Figuras, Palindromo,TriangulosPuntos],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
