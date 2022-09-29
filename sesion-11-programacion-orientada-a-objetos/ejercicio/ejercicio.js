// - Una clase llamada "Estudiante" que tenga:

// - Una variable llamada nombre

// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

// - Crea una nueva instancia de "Estudiante"

// - Haz la llamada al método obtenDatos

class Estudiante {
    _nombre;
    _asignaturas = ["Javascript", "HTML", "CSS"];

    constructor(_nombre, _asignaturas){
        this._nombre = _nombre;
        // this._asignaturas = _asignaturas;
    }
    obtenDatos() {
        return {
            "nombre": this._nombre,
            "asignaturas": this._asignaturas
        }
    }
}

let nuevoEstudiante = new Estudiante("Nacho");

console.log(`Mi nombre es ${nuevoEstudiante.obtenDatos().nombre} y mis materias son ${nuevoEstudiante.obtenDatos().asignaturas}`);