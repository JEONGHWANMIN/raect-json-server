import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { FormStyled } from '../components/Styles/Form.styled'
import Header from '../components/Header'
// Text Editor 
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Form() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    writer: "",
    title: "",
    text: ""
  })
  const { writer, title, text } = formData
  const onChange = (e) => {
    setFormData((preState) => ({
      ...preState,
      [e.target.name]: e.target.value
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
      <Header />
      <FormStyled >
        <form onSubmit={onSubmit}>
          <label>작성자 : </label>
          <input onChange={onChange} name="writer" type={'text'} placeholder="작성자" value={writer} />
          <label>title : </label>
          <input onChange={onChange} name="title" type={'text'} placeholder="title" value={title} />
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
              setFormData((state) => ({
                ...state,
                text: data
              }))
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />
          <button type='submit'>제출</button>
          <Link to={'/'}>뒤로가기</Link>
        </form>
      </FormStyled>
    </>
  )
}
