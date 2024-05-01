import React from 'react'
import { Link } from 'react-router-dom'
import Skeleton from '../skeleton/Skeleton'


const Products = ({data, loading}) => {
    let products = data?.map((el)=> <div className='card' key={el.id}>
    <Link to={`/product/${el.id}`}>
      <img src={el.images[0]} width={300} alt="" />
    </Link>
    <h2>{el.title}</h2>
    <button>Learn more</button>
  </div>)
  return (
    <>
        {loading ?  <Skeleton count={10}/> : <></>}
        <div className='wrapper'>{products}</div>
    </>
  )
}

export default Products