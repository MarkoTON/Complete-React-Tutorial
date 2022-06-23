import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 4 }
  ])

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}

      <hr/>

      {blogs.map((blog,keyID,limun,korn) => (
        <div className="blog-preview" key={keyID} >
          {console.log(keyID)}
          {console.log(limun)}
          {console.log(korn)}
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  );
}
 
export default Home;
