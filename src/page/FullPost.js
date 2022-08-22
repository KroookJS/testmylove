import axios from "../axios";
import React from "react";
import { useParams } from "react-router-dom";
import { Post } from "../components/MyPost/Post";
import ReactMarkdown from 'https://esm.sh/react-markdown@7'

export const FullPost = () => {

  const [data, setData] = React.useState([])
  const [isloading, setIsLoading] = React.useState(false)

  const {id} = useParams() 

  React.useEffect(() => {
    axios.get(`/posts/${id}`).
    then((res) => {
      setData(res.data)
      setIsLoading(false)
    })
    .catch(() => alert('Ошбка при открытие поста'))
  })


  return (
    <>
      <Post  
        id={data._id}
        title={data.title}
        imageUrl={`http://localhost:4444${data.imageUrl}`}
        user={data.user}
        createdAt={"12 июня 2022 г."}
        viewsCount={150}
        commentsCount={3}
        tags={data.tags ? data.tags : ['react']}
        isFullPost
      >
        <p>
        <ReactMarkdown children={data.text}  />
        </p>
      </Post>
      
    </>
  );
};