import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BlogAuthor from "../../components/blog/blog-author/BlogAuthor";
import BlogLike from "../../components/likes/BlogLike";
//import posts from "../../data/posts.json";
import "./styles.css";
const Blog = () => {
  const [blog, setBlog] = useState({});

  const params = useParams();
  const { id } = params;
  //const navigate = useNavigate();

  const fetchPost = async () => {
    try {
      let response = await fetch(`http://localhost:3001/blogposts/${id}`);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setBlog(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="blog-details-root">
      <Container>
        <Image className="blog-details-cover" src={blog.cover} fluid />
        <h1 className="blog-details-title">{blog.title}</h1>

        <div className="blog-details-container">
          <div className="blog-details-author">
            <BlogAuthor {...blog.author} />
          </div>
          <div className="blog-details-info">
            <div>{blog.createdAt}</div>
            {/* <div>{`${blog.readTime.value} ${blog.readTime.unit} read`}</div> */}
            <div
              style={{
                marginTop: 20,
              }}
            >
              <BlogLike defaultLikes={["123"]} onChange={console.log} />
            </div>
          </div>
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        ></div>
      </Container>
    </div>
  );
};

export default Blog;
