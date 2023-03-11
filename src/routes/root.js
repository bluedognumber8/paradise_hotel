import styled from 'styled-components/macro'
import { Link, Outlet } from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root
