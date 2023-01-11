import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogAuthor from "../blog-author/BlogAuthor";
import "./styles.css";
const BlogItem = (props) => {
  const { title, category, cover, author, id } = props;
  return (
    <Link to={`/blogposts/${id}`} className="blog-link">
      <Card className="blog-card">
        <Card.Img variant="top" src={cover} className="blog-cover" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <BlogAuthor {...author} />
          <span class="badge rounded-pill bg-dark">{category}</span>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default BlogItem;
