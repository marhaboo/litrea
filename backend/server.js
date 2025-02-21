import express from "express";
import cors from "cors";
import authorRoutes from "./routes/authorRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: /^(http:\/\/localhost:\d+)$/,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Используем маршруты
app.use(authorRoutes);
app.use(bookRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
