import React from "react";
import Article from "./Article";

const ArticleList = ({ articles }) => {
  return (
    <main>
      {articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </main>
  );
};

export default ArticleList;
