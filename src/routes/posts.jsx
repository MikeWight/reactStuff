import axios from "axios";
import React from "react";
import {
    NavLink,
    Outlet
  } from "react-router-dom";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Posts() {
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPosts(response.data);
    });
  }, []);

  if (!posts) return null;
  const allPosts = posts.map((post) => (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
          to={`/posts/${post.id}`}
          key={post.id}
        >
          {post.title}
        </NavLink>
      </nav>
      <Outlet />
    </div>
  ));

  return (
    <ul>{allPosts}</ul>
  );
}