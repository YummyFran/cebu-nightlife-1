import React from 'react'

const ContextImageSection = ({ context = '', image = {} }) => {
  return (
    <section className='context-image'>
        <div className="context">
            {
                context.split('.').map((line, index) => (
                    <p key={index}>{line}</p>
                ))
            }
        </div>
        <div className="image">
            <img src={`src/assets/${image.src}`} alt={image.alt} />
        </div>
    </section>
  )
}

export default ContextImageSection