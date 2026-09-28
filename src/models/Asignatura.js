import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Asignatura = sequelize.define("Asignatura", {
  idAsignatura: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nomAsignatura: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  semestreActual: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  numCreditos: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  idUniversidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idCarrera: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},{
    timestamps: true,
});

export default Asignatura;
