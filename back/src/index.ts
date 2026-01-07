import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/error.middleware.js";


dotenv.config();

const app = express();

// 일반 미들웨어/라우트 등록
app.use(express.json());
app.use("/api", routes);
// 에러 미들웨어
app.use(errorHandler);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
