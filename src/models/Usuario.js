import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Usuario = sequelize.define("Usuario", {
  idUsuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nomUsuario: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
  },
  correoElectronico: { 
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
    contrasena: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  fotoPerfil: {
    type: DataTypes.STRING,
    allowNull: true,
  }
},{
    timestamps: true,
});

