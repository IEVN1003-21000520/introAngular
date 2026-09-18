import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-figuras',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './figuras.css',
  templateUrl: './figuras.html',
})
export class Figuras {

  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;
  operacion: string = '';

  calcular() {

    if (this.operacion === 'rectangulo') {
      this.resultado = this.num1 * this.num2;
    }

    if (this.operacion === 'cuadrado') {
      this.resultado = this.num1 * this.num1;
    }

    if (this.operacion === 'circulo') {
      this.resultado = Math.PI * this.num1 * this.num1;
    }

    if (this.operacion === 'triangulo') {
      this.resultado = (this.num1 * this.num2) / 2;
    }

    if (this.operacion === 'pentagono') {
      this.resultado = (5 * this.num1 * this.num2) / 2;
    }
  }
}