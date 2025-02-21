import bcrypt from "bcryptjs";
import prisma from "../prisma/client.js";
import jwt from "jsonwebtoken";

// РЕГИСТРАЦИЯ
export const registerUser = async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  try {
    // Проверяем, существует ли пользователь с таким email или name
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { name }],
      },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User with this email or name already exists" });
    }

    // Хешируем пароль
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создаём пользователя
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    // Проверяем, установлен ли секретный ключ
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not set in .env file");
    }

    // Создаём токен
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ message: "User created successfully", token });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: "Registration error", error: error.message });
  }
};

// ЛОГИН
export const loginUser = async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  try {
    // Проверяем, есть ли пользователь с таким именем
    const user = await prisma.user.findUnique({ where: { name } });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Проверяем пароль
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    // Проверяем, установлен ли секретный ключ
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not set in .env file");
    }

    // Создаём токен
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};
