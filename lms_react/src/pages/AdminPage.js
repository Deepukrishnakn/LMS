
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Anavebar from '../components/admin/Anavebar'
import Home from '../components/home/Home'
function AdminPage() {
  return (
    <div className='bg'>
    <Anavebar/>
    <Row>
      <Col lg={12}>
      <Home/>
      </Col>
    </Row>
    
        </div>
  )
}

export default AdminPage