import {Usuario} from "../models/Usuario.js";

const initUsuarios = [
  {
    nomUsuario: "Juan Perez",
    correoElectronico: "juan.perez@example.com",
    contrasena: "password123",
    fotoPerfil: "https://example.com/foto1.jpg",
  },
  {
    nomUsuario: "María García",
    correoElectronico: "maria.garcia@example.com",
    contrasena: "maria2024",
    fotoPerfil: "https://example.com/foto2.jpg",
  },
  {
    nomUsuario: "Carlos Rodríguez",
    correoElectronico: "carlos.rodriguez@example.com",
    contrasena: "carlos456",
  },
  {
    nomUsuario: "Ana Martínez",
    correoElectronico: "ana.martinez@example.com",
    contrasena: "anaMtz789",
    fotoPerfil: "https://example.com/foto4.jpg",
  },
  {
    nomUsuario: "Luis Hernández",
    correoElectronico: "luis.hernandez@example.com",
    contrasena: "luis_h123",
    fotoPerfil: "https://example.com/foto5.jpg",
  },
  {
    nomUsuario: "Laura Gómez",
    correoElectronico: "laura.gomez@example.com",
    contrasena: "laura2024",
  },
  {
    nomUsuario: "Pedro Sánchez",
    correoElectronico: "pedro.sanchez@example.com",
    contrasena: "pedroS321",
    fotoPerfil: "https://example.com/foto7.jpg",
  },
  {
    nomUsuario: "Sofía López",
    correoElectronico: "sofia.lopez@example.com",
    contrasena: "sofia_l987",
    fotoPerfil: "https://example.com/foto8.jpg",
  },
  {
    nomUsuario: "Andrés Torres",
    correoElectronico: "andres.torres@example.com",
    contrasena: "andres654",
  },
  {
    nomUsuario: "Camila Ramírez",
    correoElectronico: "camila.ramirez@example.com",
    contrasena: "camila2025",
    fotoPerfil: "https://example.com/foto10.jpg",
  },
  {
    nomUsuario: "Diego Flores",
    correoElectronico: "diego.flores@example.com",
    contrasena: "diegoF111",
    fotoPerfil: "https://example.com/foto11.jpg",
  },
  {
    nomUsuario: "Valentina Ruiz",
    correoElectronico: "valentina.ruiz@example.com",
    contrasena: "vale_r222",
  },
  {
    nomUsuario: "Javier Morales",
    correoElectronico: "javier.morales@example.com",
    contrasena: "javier333",
    fotoPerfil: "https://example.com/foto13.jpg",
  },
  {
    nomUsuario: "Isabella Castro",
    correoElectronico: "isabella.castro@example.com",
    contrasena: "isa_c444",
    fotoPerfil: "https://example.com/foto14.jpg",
  },
  {
    nomUsuario: "Mateo Vargas",
    correoElectronico: "mateo.vargas@example.com",
    contrasena: "mateoV555",
  },
  {
    nomUsuario: "Daniela Ortiz",
    correoElectronico: "daniela.ortiz@example.com",
    contrasena: "dani_o666",
    fotoPerfil: "https://example.com/foto16.jpg",
  },
  {
    nomUsuario: "Sebastián Rojas",
    correoElectronico: "sebastian.rojas@example.com",
    contrasena: "sebas777",
    fotoPerfil: "https://example.com/foto17.jpg",
  },
  {
    nomUsuario: "Mariana Silva",
    correoElectronico: "mariana.silva@example.com",
    contrasena: "mariS888",
  },
  {
    nomUsuario: "Felipe Mendoza",
    correoElectronico: "felipe.mendoza@example.com",
    contrasena: "felipe999",
    fotoPerfil: "https://example.com/foto19.jpg",
  },
  {
    nomUsuario: "Juliana Herrera",
    correoElectronico: "juliana.herrera@example.com",
    contrasena: "juli_h000",
    fotoPerfil: "https://example.com/foto20.jpg",
  },
];

export async function loadInitialUsuarios() {
  try {
    const count = await Usuario.count();
    if (count === 0) {
      await Usuario.bulkCreate(initUsuarios);
      console.log("Usuarios iniciales cargados correctamente.");
    } else {
      console.log("Los usuarios ya han sido cargados previamente.");
    }
  }
  catch (error) {
    console.log(error);
  }
}