import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const AppLayout = () => {
  return (
    <div>
        <Header />
        <Outlet /> 
        {/* <Outlet /> allows the parent route to render its child routes. */}
    </div>
  )
}

export default AppLayout