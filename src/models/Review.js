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
    allowNull: true, // Si la reseña es hija de otro review, no tiene calificacion
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
  idReviewPadre: {
    type: DataTypes.INTEGER,
    allowNull: true, // Si no tiene padre -> null
    references: {
      model: "Reviews",
      key: "idReview",
    },
  },
},{
    timestamps: true,
});
