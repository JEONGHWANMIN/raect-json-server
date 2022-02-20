import styled from "styled-components"

export const NotesPostsStyled = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  & > div {
    display: flex;
    padding: 3rem;
    margin: 1rem;
    border-radius: 1rem;
    border: 1px solid gray;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: lightgray;
  }
  & > div > h1 {
    padding: 1rem;
  }
  & > div > button {
    background-color: beige;
  }
`