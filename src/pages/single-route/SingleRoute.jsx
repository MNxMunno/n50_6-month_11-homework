import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../api'

const SingleRoute = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        axios
            .get(`/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(res => console.log(res))
    },[])

    if(!product){
        return <h2 className='container'>Loading...</h2>
    }

  return (
    <div className='container'>
        <h2>{product?.title}</h2>
        <img src={product?.images[0]} alt="" />
    </div>
  )
}

export default SingleRoute