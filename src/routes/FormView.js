import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import { Link, useParams, useNavigate } from 'react-router-dom'
import parse from 'html-react-parser';

function FormView() {
  let { id } = useParams()
  const [data, setFormData] = useState({
    title: "",
    writer: "",
    text: ""
  })
  const getIdData = async () => {
    const res = await axios.get(`http://localhost:4000/posts/${id}`)
    console.log(res.data);
    setFormData({
      title: res.data.title,
      writer: res.data.writer,
      text: res.data.text
    })
  }
  useEffect(() => {
    getIdData()
  }, [])
  const { title, writer, text } = data

  return (
    <>
      <Header />
      <div>
        <h1>{title}</h1>
        <p>작성자 : {writer}</p>
      </div>
      <div>
        {parse(text)}
      </div>
    </>

  )
}

export default FormView