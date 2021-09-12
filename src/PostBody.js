import React, { useEffect, useState } from "react";
import axios from "axios";

function PostBody() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://medtest.utkarshh.in/api/vol/community-list/")
      .then((res) => {
        console.log(res.data.data);
        setPost(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const titles = posts.map((post) => {
    return (
      <div class="col-md-6">
        <h1 className="h2">{post.title}</h1>

        <img src={post.image} className="img-fluid " alt="Post-Img" />
        <p className="shadow-lg p-3 mb-5 bg-body rounded">{post.content}</p>
      </div>
    );
  });

  return <div className="row">{titles}</div>;
}

export default PostBody;
