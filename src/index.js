import app from "./app.js";
import {sequelize} from "./database/database.js";
import { loadInitialAsignaturas } from "./database/initAsignaturas.js";
import { loadInitialUsuarios } from "./database/initUsuarios.js"; 
import { loadInitialReviews } from "./database/initReviews.js";
import { setupRelations } from "./models/relations.js";
import "./models/Asignatura.js";
import "./models/Usuario.js";
import "./models/Review.js";


async function init() {
try {
     await sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

  await sequelize.sync({ force: true });
  
  setupRelations();
  await loadInitialUsuarios();
  await loadInitialAsignaturas();
  await loadInitialReviews();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
} catch (error) {
console.log(error)
}
    


}

init();
