import React from "react";
import ReactDom from "react-dom";
import DisPlayBook from "./book";
import { books } from "./books";
import "./index.css";

const BookList = () => {
  console.log("object");
    return (
      <section className="bookList">
        {
          books.map((book) => {
            return (
              <DisPlayBook key={book.id} {...book}
              />
            );
          })
        }
      </section>
    );
};

ReactDom.render(<BookList />, document.getElementById("root"));
