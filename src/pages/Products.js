import React ,{ useState,useEffect } from 'react'
import axios from 'axios'

function Products() {
    const url = 'https://604f33e0c20143001744c8e3.mockapi.io/name'
    const [product,setProduct] = useState(null)
    useEffect(()=>{
        axios.get(url)
        .then(response => {
            setProduct(response.data)
        })
    },[url])
    if (product){
        
        return (
            <div className='products/name'>
                <h1>{product.name}</h1>
            </div>
        )
    }

}

export default Products
