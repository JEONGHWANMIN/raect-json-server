
import React from 'react'
import NotesPosts from './NotesPosts';
import { Link } from 'react-router-dom';
import { ButtonStyled } from './Styles/Button.styled';
export default function Notes() {
  return (
    <>
      <NotesPosts />
      <ButtonStyled><Link to={'/form'}>글쓰기</Link></ButtonStyled>
    </>
  )
}
