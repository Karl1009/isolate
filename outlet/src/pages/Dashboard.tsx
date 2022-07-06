import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <h1>Dashboard</h1>
        <Link to="../tasks">tasks</Link>
        <Link to="../messages">messages</Link>
        <Outlet/>
    </div>
  )
}

export default Dashboard