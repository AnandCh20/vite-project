import React from 'react'
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
        <h1>404</h1>
        <h2>Page not found</h2>
        <button onClick={()=>navigate('/')}>Home</button>
    </div>
  )
}

export default NotFound