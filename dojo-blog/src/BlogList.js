const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <h4>Written by { blog.author }</h4>
          <p>{ blog.body }</p>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;