import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext';

export default function BookForm() {
  const { addBook } = useContext(BookContext)
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text" 
        placeholder="Title"
        required
      />

      <input
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
        type="text" 
        placeholder="Author" 
        required
      />

      <input 
        type="submit" 
        value="Add a Book"
      />
    </form>
  )
}
