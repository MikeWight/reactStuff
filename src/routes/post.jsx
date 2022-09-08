import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Post() {
    const [post, setPost] = React.useState(null);

    let params = useParams();

    const fullUrl = `${baseURL}/${params.postId}`

    React.useEffect(() => {
        console.log('Got in here');
      axios.get(fullUrl).then((response) => {
        setPost(response.data);
      });
    }, [params.postId]);

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