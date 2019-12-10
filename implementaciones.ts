import { Forma } from "./interfaz";

class Circulo implements Forma {
    cantVertices : number;
    radio : number;

    constructor (radio: number) {
        this.cantVertices = 0;
        this.radio = radio;
    }
    obtenerArea() {
        return Math.PI * this.radio ** 2;
    }
}

class Rectangulo implements Forma {
    cantVertices : number;
    base : number;
    altura : number;

    constructor (base: number, altura: number) {
        this.cantVertices = 4;
        this.base = base;
        this.altura = altura;
    }
    obtenerArea() {
        return this.base * this.altura;
    }
}

class Cuadrado implements Forma {
    cantVertices : number;
    lado : number;

    constructor (lado: number) {
        this.cantVertices = 4;
        this.lado = lado;
    }
    obtenerArea() {
        return this.lado ** 2;
    }
}

const forma: Forma = new Cuadrado(10);
const area = forma.obtenerArea();
console.log(area);
console.log(forma);