import express from "express";
import models, { sequelize } from "../models";

const app = express();

app.use((req, res, next) => {
  req.context = {
    models,
    me: ""
  };
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync().then(() => {
  app.listen(3000, () => console.log("Example app listening on port 3000!"));
});
