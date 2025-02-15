import React from 'react'
import BookCard from './BookCard';

interface Props {
  tittle: string;
  books:  book[];
  containerClassName?: string;
}
const BookList = ({ tittle, books, containerClassName }: Props) => {
  return (
    <section className={containerClassName}>
      <h2 className='font-bebas-neue text-4xl text-light-100'>{tittle}</h2>

      <ul className='book-list'>
        {books.map((book) => (
          <BookCard  key={book.title} {...book}/>
        ))}
      </ul>
    </section>
  )
}

export default BookList;