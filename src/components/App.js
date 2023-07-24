import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  const { name, logo, about, posts } = blogData;
  return (
    <div className="App">
      <Header blogName={name} />
      <About logo={logo} aboutText={about} />
      <ArticleList articles={posts} />
    </div>
  );
}

export default App;
