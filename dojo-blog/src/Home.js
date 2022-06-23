import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran');
    // console.log(blogs);
    // console.log(name);
    // console.log(useState);
    // console.log(useState('name'));
    // console.log(setName);
    // console.log(setName());
    // console.log(setName(5));
    // Bice dva puta da renderuje i u prvom je Mario u drugom je promenjen na 5
    // Ako ostavimo na kraju prazne zagrade [] onda ce useEffect biti pokrenuta samo jednom tokom rendiranja. To je drugi uslov kada se ova funkcija pokrece
  }, [name])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName('luigi')}>change name</button>
      <p>{name}</p>
    </div>
  );
}
 
export default Home;
