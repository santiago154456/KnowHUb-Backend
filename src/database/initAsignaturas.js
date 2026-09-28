import Asignatura from "../models/Asignatura.js";

const initAsignaturas = [
  { nomAsignatura: "Matematicas I", semestreActual: "1", estado: "Activa", descripcion: "Fundamentos de matematicas", numCreditos: 3,
    // idUniversidad: 1,
    // idCarrera: 1
  },
  { nomAsignatura: "Introduccion a la Programacion", semestreActual: "1", estado: "Activa", descripcion: "Conceptos basicos de programacion", numCreditos: 4,
    // idUniversidad: 1,
    // idCarrera: 1
  },
  { nomAsignatura: "Comunicacion Oral y Escrita", semestreActual: "1", estado: "Activa", descripcion: "Habilidades de comunicacion academica", numCreditos: 2,
    // idUniversidad: 1,
    // idCarrera: 1
  },
  { nomAsignatura: "Fundamentos de Computacion", semestreActual: "1", estado: "Activa", descripcion: "Principios de los sistemas computacionales", numCreditos: 3,
    // idUniversidad: 1,
    // idCarrera: 1
  },
  { nomAsignatura: "Algebra Lineal", semestreActual: "2", estado: "Activa", descripcion: "Vectores, matrices y sistemas lineales", numCreditos: 3,
    // idUniversidad: 1,
    // idCarrera: 1
  },
  { nomAsignatura: "Programacion Orientada a Objetos", semestreActual: "2", estado: "Activa", descripcion: "Diseno de programas con objetos y clases", numCreditos: 4,
    // idUniversidad: 1,
    // idCarrera: 1
  },
  { nomAsignatura: "Fisica General", semestreActual: "2", estado: "Activa", descripcion: "Principios basicos de fisica", numCreditos: 3,
    // idUniversidad: 1,
    // idCarrera: 1
  },
  { nomAsignatura: "Estructuras de Datos", semestreActual: "3", estado: "Activa", descripcion: "Organizacion y manejo de datos", numCreditos: 4,
    // idUniversidad: 1,
    // idCarrera: 1
  },
  { nomAsignatura: "Matematicas Discretas", semestreActual: "3", estado: "Activa", descripcion: "Logica, conjuntos y combinatoria", numCreditos: 3,
    // idUniversidad: 1,
    // idCarrera: 1
  },
  { nomAsignatura: "Bases de Datos I", semestreActual: "3", estado: "Activa", descripcion: "Modelado y consulta de bases de datos", numCreditos: 4,
    // idUniversidad: 1,
    // idCarrera: 1
  },
  { nomAsignatura: "Arquitectura de Computadores", semestreActual: "4", estado: "Activa", descripcion: "Componentes y funcionamiento del computador", numCreditos: 3,
    // idUniversidad: 1,
    // idCarrera: 1
  },
  { nomAsignatura: "Desarrollo Web", semestreActual: "4", estado: "Activa", descripcion: "Fundamentos del desarrollo de aplicaciones web", numCreditos: 4,
    // idUniversidad: 1,
    // idCarrera: 1
  },
  { nomAsignatura: "Sistemas Operativos", semestreActual: "4", estado: "Activa", descripcion: "Administracion de recursos y procesos", numCreditos: 3,
    // idUniversidad: 1,
    // idCarrera: 1
  },
  { nomAsignatura: "Bases de Datos II", semestreActual: "5", estado: "Activa", descripcion: "Administracion y optimizacion de bases de datos", numCreditos: 4,
    // idUniversidad: 1,
    // idCarrera: 1
  },
  { nomAsignatura: "Redes de Computadores", semestreActual: "5", estado: "Activa", descripcion: "Protocolos y comunicacion en redes", numCreditos: 3,
    // idUniversidad: 1,
    // idCarrera: 1
  },
  { nomAsignatura: "Ingenieria de Software", semestreActual: "5", estado: "Activa", descripcion: "Procesos y practicas de desarrollo de software", numCreditos: 3,
    // idUniversidad: 1,
    // idCarrera: 1
  },
  { nomAsignatura: "Seguridad Informatica", semestreActual: "6", estado: "Activa", descripcion: "Principios de proteccion de sistemas y datos", numCreditos: 3,
    // idUniversidad: 1,
    // idCarrera: 1
  },
  { nomAsignatura: "Inteligencia Artificial", semestreActual: "6", estado: "Activa", descripcion: "Fundamentos de sistemas inteligentes", numCreditos: 4,
    // idUniversidad: 1,
    // idCarrera: 1
  },
  { nomAsignatura: "Computacion en la Nube", semestreActual: "7", estado: "Activa", descripcion: "Servicios e infraestructura en la nube", numCreditos: 3,
    // idUniversidad: 1,
    // idCarrera: 1
  },
  { nomAsignatura: "Proyecto de Grado", semestreActual: "8", estado: "Activa", descripcion: "Formulacion y desarrollo de un proyecto aplicado", numCreditos: 5,
    // idUniversidad: 1,
    // idCarrera: 1
  },

]



export async function loadInitialAsignaturas(){
    
   const count = await Asignatura.count();
   if(count === 0){
    await Asignatura.bulkCreate(initAsignaturas);
    console.log("Initial Asignaturas loaded");
   }

}
