import React from "react";

const Article = ({ article }) => {
  const { title, date, preview, minutesToRead } = article;

  // Calculate the number of coffee cups or bento boxes based on the minutes to read
  const renderMinutesToRead = (minutes) => {
    if (minutes < 30) {
      const coffeeCups = Math.ceil(minutes / 5);
      return `☕️`.repeat(coffeeCups) + ` ${minutes} min read`;
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      return `🍱`.repeat(bentoBoxes) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <p>{renderMinutesToRead(minutesToRead)}</p>
    </article>
  );
};

export default Article;
