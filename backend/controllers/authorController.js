import prisma from "../prisma/client.js";

// Получение всех авторов
export const getAuthors = async (req, res) => {
  try {
    const authors = await prisma.author.findMany();
    res.status(200).json(authors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve authors" });
  }
};

// Обновление "автора месяца"
export const updateAuthorOfTheMonth = async (req, res) => {
  try {
    const { authorId } = req.body;

    await prisma.author.updateMany({
      data: { isAuthorOfTheMonth: false },
    });

    const updatedAuthor = await prisma.author.update({
      where: { id: authorId },
      data: { isAuthorOfTheMonth: true },
    });

    res.json({ message: "Aвтор месяца обновлён!", author: updatedAuthor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ошибка при обновлении автора" });
  }
};
