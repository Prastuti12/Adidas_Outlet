import React from 'react'
import "../Category/categoryCard.css";

const categoryCard = ({image, title}) => {
  return (
    <div>
        <div className='Card'>
            <div className='cardContent'>
               <img src={image} alt={title}  />
                <h3 className='card-title'>{title}</h3>
            </div>
        </div>
    </div>
  )
}

export default categoryCard