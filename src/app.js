import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "one gov api",
    status: "success",
  });
});

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log("server up and running");
});