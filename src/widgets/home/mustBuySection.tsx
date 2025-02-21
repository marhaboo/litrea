"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import photo from "../../../src/app/images/book.png"
import Image, { StaticImageData } from "next/image"

interface Book {
  id: number
  title: string
  author: string
  price: number
  image: StaticImageData
}

export default function MustBuySection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const books: Book[] = [
    {
      id: 1,
      title: "Harlem Shuffle",
      author: "Colson Whitehead",
      price: 26.99,
      image: photo,
    },
    {
      id: 2,
      title: "Two Old Women",
      author: "Velma Wallis",
      price: 19.99,
      image: photo,
    },
    {
      id: 3,
      title: "Carrie Soto Is Back",
      author: "Taylor Jenkins Reid",
      price: 25.84,
      image: photo,
    },
    {
      id: 4,
      title: "Book Lovers",
      author: "Emily Henry",
      price: 15.81,
      image: photo,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % books.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + books.length) % books.length)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">You must buy it now</h2>

      <div className="relative">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {books.map((book) => (
            <div key={book.id} className="flex flex-col">
              <div className="relative aspect-[3/4] mb-4">
                <Image
                  src={book.image || "/placeholder.svg"}
                  alt={book.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <h3 className="font-medium mb-1">{book.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{book.author}</p>
              <p className="text-sm font-semibold mb-3">${book.price.toFixed(2)}</p>
              <button className="bg-[#db6956] text-white px-4 py-2 rounded-md text-sm hover:bg-[#db6956]/90 flex items-center justify-center gap-2">
                Add to cart
              </button>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {books.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-[#db6956]" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

