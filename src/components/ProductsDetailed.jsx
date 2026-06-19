import React from 'react'
import { useParams } from 'react-router-dom'
import product from '../data/Data';
const ProductsDetailed = () => {
  const {id}=useParams();
  const produ=product.find((ele)=>(ele.id===Number(id)));
  console.log(produ);
  if(!produ){
    return <h2>Product not found</h2>
  }
  return (
    <div>
      <h1>{produ.title}</h1>
      <h1>{produ.description}</h1>
      <h1>{produ.price}</h1>
    </div>
  )
}

export default ProductsDetailed
