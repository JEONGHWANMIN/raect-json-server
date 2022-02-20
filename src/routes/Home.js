import React from 'react'
import Header from '../components/Header'
import Notes from '../components/Notes'
import GlobalStyles from '../components/Styles/GlobalStyles'
export default function Home() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Notes />
    </>
  )
}
