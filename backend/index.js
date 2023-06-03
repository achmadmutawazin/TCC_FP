import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

// MySQL connection setup
const sequelize = new Sequelize("crud_db", "root", null, {
    host: "h-05-379105:us-central1:my-database-instance",
    dialect: "mysql"
  });
  
  // Test the MySQL connection
  sequelize
    .authenticate()
    .then(() => {
      console.log("MySQL connection has been established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    });
  
  // Start the server
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server up and running on port ${port}`));