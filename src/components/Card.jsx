import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const images = import.meta.glob('../assets/*');

const Card = ({ title, description, imageUrl, imagePosition, slug, fit}) => {
  const navigate = useNavigate()

  const [imgSrc, setImgSrc] = useState('')

    useEffect(() => {
        const loadImage = async () => {
            const fileName = imageUrl.split("/").pop()
            if (!fileName) return

            const match = Object.entries(images).find(([path]) =>
                path.endsWith(`/${fileName}`)
            )

            if (!match) {
                console.warn(`Image not found for: ${fileName}`);
                setImgSrc('')
                return
            }

            const mod = await match[1]()

            setImgSrc(mod.default)
        }
        loadImage()
    }, [imageUrl])

  return (
    <div className="card" onClick={() => navigate(slug)}>
      {imgSrc ? (
        <img src={imgSrc} alt={title} width={300} height={266}
        className={`card-image ${fit}`}
        style={{objectPosition: imagePosition}} />
      ) : (
        <div className="card-image-placeholder" />
      )}

      <div className="card-content">
        {
            title.split("\n").map(line => (
                <h2 key={line} className="card-title">
                    {line}
                </h2>
            ))
        }
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;