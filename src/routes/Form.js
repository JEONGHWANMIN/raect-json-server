import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Form() {
  let navigate = useNavigate();
  const [formData , setFormData] = useState({
    writer : "",
    title : "",
    text : ""
  })
  const {writer , title , text} = formData
  const onChange = (e) => {
    setFormData( (preState)  => ({
      ...preState ,
      [e.target.name] : e.target.value
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axios
      .post("http://localhost:4000/posts", formData)
      .then((res) => console.log(res));
      navigate(-1)
  }
  return (
    <>
      <Link to={'/'}>뒤로가기</Link>
      <form onSubmit={onSubmit}>
        <label>작성자 : </label>
        <input onChange={onChange} name="writer" type={'text'} placeholder="작성자" value={writer} />
        <label>title : </label>
        <input onChange={onChange} name="title" type={'text'} placeholder="title" value={title} />
        <label>내용</label>
        <textarea onChange={onChange} name='text' value={text}></textarea>
        <button type='submit'>제출</button>
      </form>
    </>
  )
}
