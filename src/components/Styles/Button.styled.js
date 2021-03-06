import styled from "styled-components";

export const ButtonStyled = styled.button`
  margin: 0;
  padding: 0.5rem 1rem;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  display: inline-block;
  width: auto;

  border: none;
  border-radius: 4px;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #0d6efd;
  cursor: pointer;
  color: #fff;
  transition: 0.5s;

&:active,
&:hover,
&:focus {
  background: var(--button-hover-bg-color);
  outline: 0;
}
&:disabled {
  opacity: 0.5;
}
`