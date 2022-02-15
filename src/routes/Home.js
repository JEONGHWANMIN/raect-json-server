import React from 'react'
import Header from '../components/Header'
import Notes from '../components/Notes'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
      <Header />
      <Notes />
      <Link to={'/form'}>글쓰기</Link>
    </>
  )
}
