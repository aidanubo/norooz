import express from "express";
import morgan from "morgan";
import { fileURLToPath } from "url";
import path from "path";
import catchError from "./Utils/catchError.js";
import catchAsync from "./Utils/catchAsync.js";
import HandleERROR from "./Utils/handleError.js";
import cors from "cors";
import { version } from "os";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from 'swagger-ui-express'
const option = {
  definition: {
    openApi: "3.0.0",
    info: {
      title: "i3center e-commerce",
      version: "1.0.0",
      description: "Mern E-commerce project for i3center code 1555",
    },
    server: [
      {
        url: ["http://localhost:5004"],
      },
    ],
  },
  apis: ["./Routes/*.js"],
};
const swaggerSpec=swaggerJSDoc(option)

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
const app = express();
app.use(cors());
app.use(express.static("Public"));
app.use(express.json());
app.use(morgan("dev"));


app.use("/api/upload", uploadRouter);
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec))
app.use(
  "*",
  catchAsync(async (req, res, next) => {
    next(new HandleERROR("route not found", 404));
  })
);
app.use(catchError);
export default app;
