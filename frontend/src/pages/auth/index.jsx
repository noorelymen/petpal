import React from 'react'
import BaseLayout from '../../components/layouts/base'
import Login from '../../components/login'
import Register from '../../components/register'
import './auth.css'

export default function Home() {
  return (
    <BaseLayout>
        
        <div className="section auth">
          <div className="container">
            <Login />
            <Register />
          </div>
        </div>
    </BaseLayout>
  )
}

