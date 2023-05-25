import React from 'react'

export default function ProductsCard({title, image, brand, color, price}) {


  return (
    <>
     <div >
        <div>
            <img src={image[0]} alt={title} width={"40px"} />
        </div>
        <div>

        </div>
            <p>{title}</p>
            <h4>{price}</h4>
            <p>{brand}</p>
            <p>{color}</p>
        </div>

    </>
    
  )
}
