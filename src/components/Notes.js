import axios from 'axios';
import React from 'react'
import NotesPosts from './NotesPosts';
import { Link } from 'react-router-dom';
export default function Notes() {
  return (
    <>
      <NotesPosts />
      <Link to={'/form'}>글쓰기</Link>
    </>
  )
}
