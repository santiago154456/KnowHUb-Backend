import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Review = sequelize.define("Review", {
  idReview: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  calificacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 5,
    },
 },
 numMegusta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  idAsignatura: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Asignaturas",
      key: "idAsignatura",
    },
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Usuarios",
      key: "idUsuario",
    },
  },
  idDocente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},{
    timestamps: true,
});
