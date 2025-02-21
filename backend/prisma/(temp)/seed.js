import dotenv from 'dotenv';
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

// Настройка dotenv
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const prisma = new PrismaClient();

// Функция для конвертации изображения в base64
function getImageBase64(imagePath) {
  try {
    const filePath = path.resolve(__dirname, imagePath); // Используем __dirname для правильного формирования пути
    return fs.readFileSync(filePath, { encoding: "base64" });
  } catch (error) {
    console.error(`Ошибка загрузки изображения ${imagePath}:`, error);
    return null;
  }
}

async function main() {
  await prisma.books.createMany({
    data: [
      {
        title: "Noc Ognia",
        author: "Éric-Emmanuel Schmitt",
        price: 15.99,
        image: getImageBase64("./backend/photos/Eric-Emanuel.png"),
      },
      {
        title: "The Mystery of the Blue Train",
        author: "Agatha Christie",
        price: 12.5,
        image: getImageBase64("./backend/photos/Agatha.png"),
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 18.99,
        image: getImageBase64("./backend/photos/F.Scott.png"),
      },
      {
        title: "1984",
        author: "George Orwell",
        price: 14.75,
        image: getImageBase64("./backend/photos/George.png"),
      },
      {
        title: "War and Peace",
        author: "Leo Tolstoy",
        price: 22.0,
        image: getImageBase64("./backend/photos/Leo-Tolstoy.png"),
      },
      {
        title: "Kafka on the Shore",
        author: "Haruki Murakami",
        price: 16.8,
        image: getImageBase64("./backend/photos/Murakami.png"),
      },
      {
        title: "Harry Potter and the Cursed Child",
        author: "J.K. Rowling",
        price: 25.99,
        image: getImageBase64("./backend/photos/Rowling.png"),
      },
    ],
  });

  console.log("Books added successfully!");
}

main()
  .catch((e) => console.error("Ошибка:", e))
  .finally(() => prisma.$disconnect());
