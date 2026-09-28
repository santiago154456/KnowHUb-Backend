import {Review} from '../models/Review.js';

const initReviews = [
  {
    descripcion: "Excelente curso, muy bien explicado y con buenos ejemplos.",
    calificacion: 5, 
    numMegusta: 10,
    idAsignatura: 1,
    idUsuario: 1,
    idDocente: 1,
  },
  {
    descripcion: "El docente domina el tema y explica con paciencia cada concepto.",
    calificacion: 5, 
    numMegusta: 18,
    idAsignatura: 2,
    idUsuario: 2,
    idDocente: 1,
  },
  {
    descripcion: "Buen contenido, aunque el ritmo de las clases es un poco acelerado.",
    calificacion: 4,
    numMegusta: 7,
    idAsignatura: 1,
    idUsuario: 3,
    idDocente: 2,
  },
  {
    descripcion: "Las tareas son útiles, pero faltó más retroalimentación.",
    calificacion: 3,
    numMegusta: 4,
    idAsignatura: 3,
    idUsuario: 4,
    idDocente: 2,
  },
  {
    descripcion: "Me encantó la metodología, aprendí mucho con los proyectos prácticos.",
    calificacion: 5,
    numMegusta: 22,
    idAsignatura: 4,
    idUsuario: 5,
    idDocente: 3,
  },
  {
    descripcion: "Las clases son muy teóricas y se vuelven monótonas.",
    calificacion: 2,
    numMegusta: 3,
    idAsignatura: 2,
    idUsuario: 6,
    idDocente: 3,
  },
  {
    descripcion: "Excelente disposición para resolver dudas fuera de clase.",
    calificacion: 5,
    numMegusta: 15,
    idAsignatura: 5,
    idUsuario: 7,
    idDocente: 4,
  },
  {
    descripcion: "El material de apoyo es muy completo y está bien organizado.",
    calificacion: 4,
    numMegusta: 9,
    idAsignatura: 3,
    idUsuario: 8,
    idDocente: 4,
  },
  {
    descripcion: "No me gustó la forma de evaluar, los exámenes fueron muy difíciles.",
    calificacion: 1,
    numMegusta: 2,
    idAsignatura: 6,
    idUsuario: 9,
    idDocente: 5,
  },
  {
    descripcion: "Curso aceptable, cumple con lo básico pero le falta profundidad.",
    calificacion: 3,
    numMegusta: 5,
    idAsignatura: 1,
    idUsuario: 10,
    idDocente: 5,
  },
  {
    descripcion: "Muy recomendado, los ejemplos del mundo real ayudan a entender mejor.",
    calificacion: 5,
    numMegusta: 30,
    idAsignatura: 7,
    idUsuario: 1,
    idDocente: 6,
  },
  {
    descripcion: "El docente siempre llega puntual y respeta los tiempos de la clase.",
    calificacion: 4,
    numMegusta: 11,
    idAsignatura: 5,
    idUsuario: 2,
    idDocente: 6,
  },
  {
    descripcion: "Faltó organización en el cronograma, pero el contenido fue bueno.",
    calificacion: 3,
    numMegusta: 6,
    idAsignatura: 4,
    idUsuario: 3,
    idDocente: 7,
  },
  {
    descripcion: "Las explicaciones son claras y las clases son muy dinámicas.",
    calificacion: 5,
    numMegusta: 20,
    idAsignatura: 8,
    idUsuario: 4,
    idDocente: 7,
  },
  {
    descripcion: "Me pareció confuso al inicio, pero mejoró mucho hacia el final del curso.",
    calificacion: 4,
    numMegusta: 8,
    idAsignatura: 2,
    idUsuario: 5,
    idDocente: 1,
  },
];

export async function loadInitialReviews(){
    
   const count = await Review.count();
   if(count === 0){
    await Review.bulkCreate(initReviews);
    console.log("Initial Reviews loaded");
   }

}