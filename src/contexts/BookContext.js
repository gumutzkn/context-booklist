import React, { createContext, useState } from 'react'
import { v4 as uuid4 } from "uuid"

export const BookContext = createContext();

export default function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { title: "Cesur Yeni Dünya", author: "Kim Kardashian", id: 1 },
    { title: "Sefiller", author: "Mahmut Tuncer", id: 2 }
  ])

  function addBook(title, author) {
    setBooks([...books, { title, author, id: uuid4() }])
  }

  function removeBook(id) {
    setBooks(books.filter(book => book.id !== id))
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      { props.children }
    </BookContext.Provider>
  )
}
