import React, { useEffect, useState } from "react";
import { Container, Image, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BlogAuthor from "../../components/blog/blog-author/BlogAuthor";
import BlogLike from "../../components/likes/BlogLike";
import NavBar from "../../components/navbar/BlogNavbar";
//import posts from "../../data/posts.json";
import "./styles.css";
const Blog = () => {
  const [blog, setBlog] = useState({});

  const params = useParams();
  const { id } = params;
  const apiUrl = process.env.REACT_APP_BE_URL;
  //const navigate = useNavigate();

  const fetchPost = async () => {
    try {
      let response = await fetch(`${apiUrl}/blogposts/${id}`);
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
    <>
      <NavBar />

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
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          ></div>
          <div
            className="d-flex my-2"
            style={{
              marginTop: 20,
            }}
          >
            <BlogLike defaultLikes={["123"]} onChange={console.log} />
            <Button className="blog-details-btn">
              <a href={`${apiUrl}/blogposts/${blog._id}/pdf`}>
                Print this article
              </a>
            </Button>
          </div>
          {/* <div>
            {blog &&
              blog.comments.map((comment) => (
                <div>
                  <p>{comment.comment}</p>
                  <p>{comment.rate}</p>
                </div>
              ))}
          </div> */}
        </Container>
      </div>
    </>
  );
};

export default Blog;
