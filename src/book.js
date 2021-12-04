import React from "react";
const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;

  const clickFunction = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello World");
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickFunction}>
        Example
      </button>
    </article>
  );
};

export default Book;