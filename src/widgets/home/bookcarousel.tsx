"use client"

import { useEffect, useState, useRef } from "react"
import { Heart, ChevronLeft, ChevronRight } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { getBooks } from "../../entities/books/api/api"
import type { AppDispatch, RootState } from "../../app/store/store"
import Image from "next/image"
import type { booksType } from "../../entities/books/models/types"

export default function BookCarousel() {
  const [selectedBooks, setSelectedBooks] = useState<booksType[]>([])
  const { books } = useSelector((state: RootState) => state.books)
  const dispatch: AppDispatch = useDispatch()
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])

  useEffect(() => {
    if (books.length > 0) {
      // Select 10 random books from the list
      const randomBooks = getRandomBooks(books, 10)
      setSelectedBooks(randomBooks)
    }
  }, [books])

  // Function to randomly select books
  const getRandomBooks = (books: booksType[], numberOfBooks: number): booksType[] => {
    const shuffledBooks = [...books].sort(() => Math.random() - 0.5)
    return shuffledBooks.slice(0, numberOfBooks)
  }

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Selected for You</h2>

      <div className="relative">
        {/* Scroll Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-200 transition-transform transform hover:scale-110"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Books Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {selectedBooks.map((book) => (
            <div
              key={book.id}
              className="flex-none w-64 snap-start bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[3/4] w-full mb-4">
                <Image
                  src={`data:image/png;base64,${book.image}` || "/placeholder.svg"}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200 transition-colors">
                  <Heart className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              <h3 className="font-semibold text-lg text-gray-800 truncate">{book.title}</h3>
              <p className="text-sm text-gray-600 truncate">{book.author}</p>
              <p className="text-lg font-semibold text-[#db6956] mt-2">${book.price.toFixed(2)}</p>
              <button className="w-full bg-[#db6956] text-white px-6 py-2 rounded-md text-sm mt-4 hover:bg-[#b85747] transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Scroll Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-200 transition-transform transform hover:scale-110"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  )
}

