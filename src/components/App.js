import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About";
import Articlelist from "./Articlelist";
console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blogname={blogData.name}/>
      <About image={blogData.image} abouttext={blogData.about}/>
      <Articlelist posts={blogData.posts}/>
    </div>
  );
}

export default App;
