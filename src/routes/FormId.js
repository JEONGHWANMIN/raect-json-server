import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
// Text Editor 
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function FormId() {
  let navigate = useNavigate();
  let { id } = useParams();
  const [writer, setWriter] = useState("")
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const getIdData = async () => {
    const res = await axios.get(`http://localhost:4000/posts/${id}`)
    console.log(res.data);
    setWriter(res.data.writer)
    setTitle(res.data.title)
    setText(res.data.text)
  }
  const onChange = (e) => {
    const { name } = e.target
    if (name === 'writer') {
      setWriter(e.target.value)
    } else if (name === 'title') {
      setTitle(e.target.value)
    }
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      writer,
      title,
      text
    }
    axios.put(`http://localhost:4000/posts/${id}`, body)
      .then((res) => console.log(res));
    return navigate("/")
  }
  useEffect(() => {
    getIdData();
  }, [])
  return (
    <>
      <h1>수정페이지</h1>
      <Link to={'/'}>뒤로가기</Link>

      <form onSubmit={onSubmit}>
        <label>작성자 : </label>
        <input name="writer" type={'text'} placeholder="작성자" onChange={onChange} value={writer} />
        <label>title : </label>
        <input name="title" type={'text'} placeholder="title" onChange={onChange} value={title} />
        <label>내용</label>
        <CKEditor
          editor={ClassicEditor}
          data={text}
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            // console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            // console.log("data : ", data)
            // console.log({ event, editor, data });
            setText(data)
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
        <button type='submit'>제출</button>
      </form>
    </>
  )
}
