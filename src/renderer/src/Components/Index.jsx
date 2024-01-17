import React from 'react'
import Header from './Header'
import Content from './Content'
import Main from './Main'
import Footer from './Footer'
import MainStatus from '../pages/MainStatus'

export default function Index() {
  return (
    <Content>
      <Header />
      <Main>
        <MainStatus />
      </Main>
      {/* <Footer /> */}
    </Content>
  )
}
