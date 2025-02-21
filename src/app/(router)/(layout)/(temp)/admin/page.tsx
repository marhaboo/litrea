"use client"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { motion } from "framer-motion"
import type { AppDispatch, RootState } from "../../../../store/store"
import { getAuthors, updateAuthorOfTheMonth } from "../../../../../entities/admin-side/author-of-the-month/api/api"
import { Toaster, toast } from "react-hot-toast"
import { CheckCircle, XCircle } from "lucide-react"

export default function AdminPage() {
  const dispatch: AppDispatch = useDispatch()
  const { authors } = useSelector((state: RootState) => state.authorMonth)

  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null)
  const [authorMonth, setAuthorMonth] = useState<{ id: string; name: string } | null>(null)

  // Загружаем авторов при монтировании
  useEffect(() => {
    dispatch(getAuthors())
  }, [dispatch])

  // Когда авторы загружены, ищем автора месяца
  useEffect(() => {
    const currentAuthor = authors.find((author) => author.isAuthorOfTheMonth)
    if (currentAuthor) {
      setAuthorMonth({ id: currentAuthor.id, name: currentAuthor.name })
    }
  }, [authors])

  const handleSelectAuthor = async (authorId: string) => {
    try {
      await dispatch(updateAuthorOfTheMonth(authorId)) 
      setAuthorMonth({ id: authorId, name: authors.find((author) => author.id === authorId)?.name || "" }) // Обновляем локальное состояние
      toast.success("Автор месяца успешно обновлён!", {
        icon: <CheckCircle color="#4CAF50" />,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      })
    } catch (error) {
      toast.error("Произошла ошибка при обновлении автора месяца.", {
        icon: <XCircle color="#F44336" />,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      })
    }
  }

  return (
    <div className="container mx-auto p-8">
      <Toaster position="top-center" reverseOrder={false} />
      <motion.h1
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Выбери автора месяца
      </motion.h1>
      <motion.select
        className="border p-2 rounded w-full"
        onChange={(e) => setSelectedAuthor(e.target.value)}
        value={selectedAuthor || ""}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <option value="">Выбери автора</option>
        {authors.map((author) => (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        ))}
      </motion.select>

      <motion.button
        onClick={() => selectedAuthor && handleSelectAuthor(selectedAuthor)}
        disabled={!selectedAuthor}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Установить как "Автор месяца"
      </motion.button>

      {authorMonth && (
        <motion.p
          className="mt-4 text-lg font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Текущий автор месяца: {authorMonth.name}
        </motion.p>
      )}
    </div>
  )
}
