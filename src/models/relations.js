import { Usuario } from "./Usuario.js";
import { Review } from "./Review.js";
import { Asignatura } from "./Asignatura.js";

export function setupRelations() {

    Usuario.hasMany(Review, {
         foreignKey: "idUsuario",
         as: "reviews", // Usuario.getReviews()
         onDelete: "cascade",
         hooks: true,
        });
    Review.belongsTo(Usuario, {
        foreignKey: "idUsuario",
        as: "usuario", // Review.getUsuario()
    });
    Asignatura.hasMany(Review, {
        foreignKey: "idAsignatura",
        as: "reviews", // Asignatura.getReviews()
        onDelete: "cascade",
        hooks: true,
    });
    Review.belongsTo(Asignatura, {
        foreignKey: "idAsignatura",
        as: "asignatura", // Review.getAsignatura()
    });

}