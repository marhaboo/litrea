import prisma from "../prisma/client.js";

export const getBooks = async (req, res) => {
  try {
    const books = await prisma.books.findMany();
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve books" });
  }
};
