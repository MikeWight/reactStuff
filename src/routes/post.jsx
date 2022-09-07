import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Post() {
    const [post, setPost] = React.useState(null);

    let params = useParams();

    React.useEffect(() => {
        axios.get(baseURL+'/'+parseInt(params.postId, 10)).then((response) => {
        setPost(response.data);
        });
    }, []);

    if (!post) return null;

  
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Title: {post.id}</h2>
      <p>
        {post.body}
      </p>
    </main>
  );
}