import bodyparser from "body-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import errorHandler from "./controllers/middlewares/errorHandler";
import helmet from 'helmet';

import productApi from "./controllers/product.controller";
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

// disable cache
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

// use cors
app.use(cors());

// use body parser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// use logger
// app.use(
//   morgan(
//     "[from: :remote-addr] [:date[iso]] [endpoint: :method :url] [status: :status] [content-length: :res[content-length]] [elapsed: :total-time ms] [agent: :user-agent]",
//     {
//       stream: fs.createWriteStream("./logs/server.log", { flags: "a" }),
//     }
//   )
// );


app.use(morgan("dev"));

// Express recomendations add & remove headderes as :
// [+] Content-Security-Policy ,  Strict-Transport-Securit , Cache-Control
// [-] X-Powered-By
app.use(helmet());

// use controllers middlewares 

app.use('/api/products', productApi);

app.get("/health", (req, res) => {
  const response = {
    //version: packageJson.version,
    appName: process.env.APP_NAME 
  };
  res.send(response);
});

// use error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening at pelsoft ${PORT}`);
});
