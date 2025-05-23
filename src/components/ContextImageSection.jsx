import React, { useEffect, useState } from 'react'

const images = import.meta.glob('../assets/*');

const ContextImageSection = ({ context = '', image = {} }) => {
    const [imgSrc, setImgSrc] = useState('')

    useEffect(() => {
        const loadImage = async () => {
            if (!image.src) return

            const match = Object.entries(images).find(([path]) =>
                path.endsWith(`/${image.src}`)
            )

            if (!match) {
                setImgSrc('')
                return
            }

            const mod = await match[1]()

            setImgSrc(mod.default)
        }
        loadImage()
    }, [image.src])

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
                imgSrc &&
                <img src={imgSrc} alt={image.alt || ''} loading='lazy' width={370} height={370}/>
            }
        </div>
    </section>
  )
}

export default ContextImageSection