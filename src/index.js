import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    id:1,
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL._AC_UL302_SR302,200_.jpg",
  },
  {
    id:2,
    title: "American Marxism",
    author: "Mark R. Levin",
    img: "https://images-na.ssl-images-amazon.com/images/I/81lsmyMcYNL._AC_UL302_SR302,200_.jpg",
  },
  {
    id:3,
    title: "It Ends With Us: A Novel",
    author: "Colleen Hoover",
    img: "https://images-na.ssl-images-amazon.com/images/I/71xUvuJiqgL._AC_UL604_SR604,400_.jpg",
  },
];

const BookList = () => {
    return (
      <section className="bookList">
        {
          books.map((book) => {
            return (
              <Book key={book.id} {...book}
              />
            );
          })
        }
      </section>
    );
};

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};


ReactDom.render(<BookList />, document.getElementById("root"));
