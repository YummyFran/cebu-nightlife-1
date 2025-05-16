import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ title, description, image = "" }) => {
  return (
    <Link to={url}>
        {image}
    </Link>
  )
}

export default Card