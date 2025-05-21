import React from 'react'

const ContextImageSection = ({ context = '', image = {} }) => {
  return (
    <section className='context-image'>
        <div className="context">
            {
                !!context &&
                context.split('\n').map((line, index) => (
                    <p 
                        key={index} 
                        className={`
                            ${line.includes('[r]') ? "red" : ""}
                        `}
                    >
                        {line.replace("[r]", "")}
                    </p>
                ))
            }
        </div>
        <div className="image">
            {
                !!image.src &&
                <img src={`src/assets/${image.src}`} alt={image.alt} />
            }
        </div>
    </section>
  )
}

export default ContextImageSection