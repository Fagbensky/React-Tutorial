import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL._AC_UL302_SR302,200_.jpg"
  },
  {
    title: "American Marxism",
    author:"Mark R. Levin",
    img:"https://images-na.ssl-images-amazon.com/images/I/81lsmyMcYNL._AC_UL302_SR302,200_.jpg"
  }
];

const BookList = () => {
    return (
      <section className="bookList">
        {
          books.map((book) => {
            return (
              <Book book={book}
              />
            );
          })
        }
      </section>
    );
};

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};


ReactDom.render(<BookList />, document.getElementById("root"));
