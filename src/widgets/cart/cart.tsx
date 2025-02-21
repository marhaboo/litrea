"use client"

import { useState } from "react"
import Image from "next/image"
import { Minus, Plus, X } from "lucide-react"

// Этот тип можно вынести в отдельный файл типов
type CartItem = {
  id: string
  title: string
  author: string
  price: number
  quantity: number
  image: string
}

export default function Cart() {
  // В реальном приложении эти данные будут храниться в глобальном состоянии (например, Redux)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 15.99,
      quantity: 1,
      image: "/placeholder.svg",
    },
    {
      id: "2",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 12.99,
      quantity: 2,
      image: "/placeholder.svg",
    },
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item)),
    )
  }

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-xl text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
                <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-medium text-gray-900">{item.title}</h2>
                  <p className="text-sm text-gray-600">{item.author}</p>
                  <p className="mt-1 text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="text-gray-500 hover:text-gray-600 focus:outline-none"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="mx-2 text-gray-700">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="text-gray-500 hover:text-gray-600 focus:outline-none"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-4 text-gray-500 hover:text-gray-600 focus:outline-none"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center border-t border-gray-200 pt-4">
              <p className="text-lg font-medium text-gray-900">Total</p>
              <p className="text-xl font-bold text-gray-900">${total.toFixed(2)}</p>
            </div>
            <button className="mt-4 w-full bg-[#db6956] text-white py-3 px-4 rounded-md hover:bg-[#b85747] transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}

