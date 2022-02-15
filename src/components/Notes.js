import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';

export default function Notes() {
  let navigate = useNavigate();
  const [posts , setPosts] = useState(null);
  const getPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data)
  }
  const onClick = (e) => {
    const id = e.target.id;
    axios.delete(`http://localhost:4000/posts/${id}`)
    return navigate("/");
  }
  useEffect( () => {
    getPosts();
  } , [posts])
  return (
    <>
      {posts ?  posts.map( (item) => {
        return <h1 key={item.id}><Link to={{
          pathname: `/post/${item.id}` ,
          state : {
            item : item
          }
        }}>{item.title}</Link><button onClick={onClick} id={item.id}>❌</button></h1>
      } )  : 'loading'}
    </>
  )
}
