import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { NotesPostsStyled } from './Styles/NotesPosts.styled';

export default function NotesPosts() {
  let navigate = useNavigate();
  const getPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data)
  }
  const [posts, setPosts] = useState(null);
  const onClick = async (e) => {
    window.confirm("정말 삭제 하시겠습니까?")
    const id = e.target.id;
    await axios.delete(`http://localhost:4000/posts/${id}`)
    return navigate(0);
  }
  useEffect(() => {
    getPosts();
  }, [])
  return (
    <NotesPostsStyled>
      {posts ? posts.map((post) => {
        return <div key={post.id}>
          <Link to={{
            pathname: `view/${post.id}`
          }}>{post.title}</Link>
          <button ><Link to={`post/${post.id}`}>수정</Link></button>
          <button id={post.id} onClick={onClick} >삭제</button>
        </div>
      }) : <h1>Loading....</h1>}
    </NotesPostsStyled >
  )
}
