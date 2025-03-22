import express from "express";
import morgan from "morgan";
import { fileURLToPath } from "url";
import path from "path";
import catchError from "./Utils/catchError.js";
import catchAsync from "./Utils/catchAsync.js";
import HandleERROR from "./Utils/handleError.js";

import cors from "cors";
import addressRouter from "./Routes/Address.js";
import { isLogin } from "./Middleware/isLogin.js";
import authRouter from "./Routes/Auth.js";
import brandRouter from "./Routes/Brand.js";
import cartRouter from "./Routes/Cart.js";
import categoryRouter from "./Routes/Category.js";
import commentRouter from "./Routes/Comment.js";
import discountCodeRouter from "./Routes/DiscountCode.js";
import orderRouter from "./Routes/Order.js";
import productRouter from "./Routes/Product.js";
import productVariantRouter from "./Routes/ProductVariant.js";
import sliderRouter from "./Routes/Slider.js";
import uploadRouter from "./Routes/Upload.js";
import userRouter from "./Routes/User.js";
import variantRouter from "./Routes/Variant.js";
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
app.use("/api/addresses", isLogin, addressRouter);
app.use("/api/auth", authRouter);
app.use("/api/brands", brandRouter);
app.use("/api/carts", isLogin, cartRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/comments", commentRouter);
app.use("/api/discounts", discountCodeRouter);
app.use("/api/orders", orderRouter);
app.use("/api/products", productRouter);
app.use("/api/product-variants", productVariantRouter);
app.use("/api/sliders", sliderRouter);
app.use("/api/users", userRouter);
app.use("/api/variants", variantRouter);
app.use("/api/discount", discountCodeRouter);

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
