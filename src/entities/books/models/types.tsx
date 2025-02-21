export interface booksType {
  id: string
  title: string
  author: string
  image: string
  price: number
}

export interface MyState {
  books: booksType[]
}