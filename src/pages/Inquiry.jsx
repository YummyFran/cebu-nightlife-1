import React from 'react'
import TwoCardLayout from '../components/TwoCardLayout'

const Inquiry = () => {
    return (
    <div
      style={{
        paddingTop: '5rem', // Space below fixed nav
        paddingInline: 'var(--side-margin)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Wrapper matches card layout max-width */}
      <div style={{ width: '100%', maxWidth: 'var(--max-width)' }}>
        <h1 style={{ marginBottom: '2rem' }}>1:1 Inquiry</h1>
        <TwoCardLayout />
      </div>
    </div>
  );
}

export default Inquiry