import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TriangulosPuntos } from './triangulos-puntos';

describe('TriangulosPuntos', () => {
  let component: TriangulosPuntos;
  let fixture: ComponentFixture<TriangulosPuntos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TriangulosPuntos],
    }).compileComponents();

    fixture = TestBed.createComponent(TriangulosPuntos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
