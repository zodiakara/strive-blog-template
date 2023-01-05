import React from "react";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
// import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";

const BlogList = () => {
  const [blogpost, setBlogPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      let response = await fetch("http://localhost:3001/blogposts");
      if (response.ok) {
        let data = await response.json();
        setBlogPosts(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Row>
      {blogpost &&
        blogpost.map((post) => (
          <Col
            md={4}
            style={{
              marginBottom: 50,
            }}
          >
            <BlogItem key={post.id} {...post} />
          </Col>
        ))}
    </Row>
  );
};

export default BlogList;
