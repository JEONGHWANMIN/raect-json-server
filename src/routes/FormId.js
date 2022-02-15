import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams ,useNavigate  } from 'react-router-dom'

export default function FormId() {
  let navigate = useNavigate();
  let { id } = useParams();
  const [writer , setWriter] = useState("")
  const [title , setTitle] = useState("")
  const [text , setText] = useState("")
  const getIdData = async () => {
    const res = await axios.get(`http://localhost:4000/posts/${id}`)
    console.log(res.data);
    setWriter(res.data.writer)
    setTitle(res.data.title)
    setText(res.data.text)
  }
  const onChange = (e) => {
    const {name} = e.target
    if (name === 'writer') {
      setWriter(e.target.value)
    } else if (name === 'title') {
      setTitle(e.target.value)
    } else if (name === 'text') {
      setText(e.target.value)
    }
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      writer,
      title,
      text
    }
    axios.put(`http://localhost:4000/posts/${id}` , body)
    .then((res) => console.log(res));
     return navigate("/")
  }
  useEffect( () => {
    getIdData();
  } ,[] )
  return (
    <>
      <h1>수정페이지</h1>
      <Link to={'/'}>뒤로가기</Link>
      <form onSubmit={onSubmit}>
        <label>작성자 : </label>
        <input  name="writer" type={'text'} placeholder="작성자" onChange={onChange} value={writer} />
        <label>title : </label>
        <input  name="title" type={'text'} placeholder="title" onChange={onChange} value={title}/>
        <label>내용</label>
        <textarea  name='text' value={text} onChange={onChange} ></textarea>
        <button type='submit'>제출</button>
    </form>
    </>
  )
}
