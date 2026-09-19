import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-opera-dist',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './opera-dist.css',
  templateUrl: './opera-dist.html',
})
export class OperaDist {

  px1: number = 0;
  py1: number = 0;
  px2: number = 0;
  py2: number = 0;

  distancia: number = 0;

  calcularDistancia(): void {
    this.distancia = Math.sqrt(
      Math.pow(this.px2 - this.px1, 2) +
      Math.pow(this.py2 - this.py1, 2)
    );
  }
}