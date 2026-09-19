import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-triangulos-puntos',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './triangulos-puntos.css',
  templateUrl: './triangulos-puntos.html',
})
export class TriangulosPuntos {
  pxa: number = 0;
  pya: number = 0;
  pxb: number = 0;
  pyb: number = 0;
  pxc: number = 0;
  pyc: number = 0;

  triangulo: string = '';

  calcularDistancia(): void {
    const x1 = this.pxa;
    const y1 = this.pya;
    const x2 = this.pxb;
    const y2 = this.pyb;
    const x3 = this.pxc;
    const y3 = this.pyc;

    let resultadoInterno = (x1 * (y2 - y3)) + (x2 * (y3 - y1)) + (x3 * (y1 - y2));

    if (resultadoInterno < 0) {
      resultadoInterno = resultadoInterno * -1;
    }

    const area = resultadoInterno / 2;

    if (area == 0) {
      this.triangulo = 'No es un triángulo';
    } else {
      this.triangulo = 'Sí forman un triángulo. El área calculada es: ' + area;
    }
  }
}