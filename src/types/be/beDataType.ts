export type UsersDataType = {
    user: {
        id: string | number,
        userName: string,
        password: string
      }
}

export type CoverPhotosDataType = {
  id: string
  idBook: string
  url: string
}

export type BooksDataType = {
  id: string
  title: string
  description: string
  pageCount: number,
  excerpt: string,
  publishDate: string
}

export type AuthorsDataType = {
  id: string
  idBook: string
  firstName: string
  lastName: string           
}

export type ActivitiesDataType = {
  id: string
  title: string
  dueDate: string
  completed: boolean
}