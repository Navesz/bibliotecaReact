import { useState, useEffect } from "react";
import books from "../assets/livros.json"
import BookCard from "./BookCard"
import logo from '../assets/logo.png'

export default function Books() {

  const [ bookInputName, setBookInputName ] = useState('')
  
  function getBooks() {    

  }

  useEffect(() => {
    console.log('adfsafds')
  })

  return (
    <>
      <section className="schoolName">
      <img src={logo} class="rounded mx-auto d-block" alt="logo" />
        <h1 className="text-center">
          Bem-vindo a biblioteca
        </h1>
        <form id="formulario" onSubmit={getBooks}>
          <div className="form-row">
            <div className="col-8 d-flex align-items-start">
              <input
                className="form-control"
                id="pesquisar"
                type="search"
                placeholder="Nome do livro"
                aria-label="Search"
                value={bookInputName}
                onChange={(e) => setBookInputName(e.target.value)}
                required
              />
            </div>
            <div className="col-4">
              <button className="btn btn-primary" type="submit">
                Pesquisar
              </button>
            </div>
          </div>
        </form>
      </section>

      <div className="card-deck livros m-0">{

        books.map((book) => {
          if (bookInputName != '') {
            if (book["NOME"].includes(bookInputName.toUpperCase())) return <BookCard key={book["REGISTRO"]} bookProp={book} />
          } else {
              return <BookCard key={book["REGISTRO"]} bookProp={book} />
          }
        })
      }</div>
    </>
  );
}
