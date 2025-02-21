export interface authorsType {
  id: string
  name: string
  bio: string
  image: string
  isAuthorOfTheMonth: boolean
}

export interface MyState {
  authors: authorsType[]
}