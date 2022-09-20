import React from 'react'
import { Col, Row } from 'react-bootstrap'
// import Header from '../components/home/Header'
import Hnavebar from '../components/home/Hnavebar'
import Home from '../components/home/Home'

function HomePage() {
  return (
    <div className='bg'>
<Hnavebar/>
<Row>
  <Col lg={12}>
  <Home/>
  </Col>
</Row>

{/* <Header/> */}

    </div>
  )
}

export default HomePage