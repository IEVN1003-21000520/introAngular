import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-palindromo',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './palindromo.css',
  templateUrl: './palindromo.html',
})
export class Palindromo {

  oracion: string = '';
  totalVocales: number = 0;
  totalConsonantes: number = 0;
  esPalindromo: boolean = false;

  ejecutar() {
    this.totalVocales = 0;
    this.totalConsonantes = 0;

    const origen  = ['a','e','i','o','u','á','é','í','ó','ú','A','E','I','O','U','Á','É','Í','Ó','Ú','b','c','d','f','g','h','j','k','l','m','n','ñ','p','q','r','s','t','v','w','x','y','z','B','C','D','F','G','H','J','K','L','M','N','Ñ','P','Q','R','S','T','V','W','X','Y','Z'];
    const destino = ['a','e','i','o','u','a','e','i','o','u','a','e','i','o','u','a','e','i','o','u','b','c','d','f','g','h','j','k','l','m','n','ñ','p','q','r','s','t','v','w','x','y','z','b','c','d','f','g','h','j','k','l','m','n','ñ','p','q','r','s','t','v','w','x','y','z'];
    const esVocal = [ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

    let textoLimpio: string[] = [];

    for (const caracter of this.oracion) {
      let idx = 0;
      let encontrado = false;

      for (const o of origen) {
        if (caracter == o) {
          encontrado = true;
          break;
        }
        idx++;
      }

      if (encontrado) {
        const charMinuscula = destino[idx];

        if (esVocal[idx]) {
          this.totalVocales++;
        } else {
          this.totalConsonantes++;
        }

        textoLimpio[textoLimpio.length] = charMinuscula;
      }
    }

    let largo = 0;
    for (const _ of textoLimpio) {
      largo++;
    }

    this.esPalindromo = largo > 0;
    let inicio = 0;
    let fin = largo - 1;

    while (inicio < fin) {
      if (textoLimpio[inicio] != textoLimpio[fin]) { 
        this.esPalindromo = false;
        break;
      }
      inicio++;
      fin--;
    }
  }
}