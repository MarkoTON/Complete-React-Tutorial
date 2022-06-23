import { useState } from "react";

const Home = () => {
  // let name = 'mario';
  let checkIfWillWork = 'Sepultura'
  const [name, setName] = useState(checkIfWillWork);
  const [age, setAge] = useState(25);

  const handleClick = () => {
    // name = 'luigi';
    setName('luigi');
    setAge(30);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
 
export default Home;
