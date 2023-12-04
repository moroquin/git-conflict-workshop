import express from "express";
import cors from "cors";
import helmet from "helmet";
import { ExecuteOperation, getAllOperations } from "./presenter/OperationPresenter";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(helmet());

app.get("/operation", (req, res) => {

  const response = ExecuteOperation(req.body);
  res.status(response.httpStatus);
  res.send(response);
  return res;
});

app.get("/operations", (req, res) => {

  const response = getAllOperations();
  res.status(response.httpStatus);
  res.send(response);
  return res;
});

app.listen(port, () => {
  
  return console.log(`Express is listening at http://localhost:${port}`);
});