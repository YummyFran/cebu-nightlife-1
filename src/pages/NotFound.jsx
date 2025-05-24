import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const nav = useNavigate()
  return (
    <main>
      <title>404 Not Found</title>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}>
        <h1>404 Not Found</h1>
        <button onClick={() => nav(-1)} style={{
          padding: '1rem 2rem',
          borderRadius: '0.5rem',
          border: 'none',
          fontSize: '1.2rem',
          cursor: 'pointer',
          background: 'black',
          color: 'white'
        }}>Go back</button>
      </div>
    </main>
  )
}

export default NotFound