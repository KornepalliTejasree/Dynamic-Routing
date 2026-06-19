import React from 'react'
import product from "../data/Data.js"
import { Link } from 'react-router-dom';
const Products = () => {
  console.log(product);
  return (
    <div className='container'>
      <div className='container-grid'>
        {
          product.map((pro)=>(
            <div className='card' key={pro.id}>
              <h2>{pro.title}</h2>
              <Link to={`/products/${pro.id}`}>View</Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Products
