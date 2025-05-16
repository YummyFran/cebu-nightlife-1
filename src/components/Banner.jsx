import { useEffect, useState } from 'react';
import '../styles/banner.css'


const Banner = ({image, position}) => {
  return (
    <div 
      className={`banner slide`} 
      style={{ backgroundImage: `url('${image}')`, backgroundPosition: `center ${position}` }}
    >
        
    </div>
  )
}

export default Banner