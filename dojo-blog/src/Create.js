import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  // add function onChange for select to throw arror if it's empty

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
        <label>Blog title <span>*</span> :</label>
        <input 
          type="text" 
          required 
          value={title}
          placeholder="Metallica news"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body <span>*</span> :</label>
        <textarea
          required
          value={body}
          placeholder="Metallica is in Belgrade again!..."
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author <span>*</span> :</label>
        <select
          value={author}
          required
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="">Please select author</option>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
}
 
export default Create;