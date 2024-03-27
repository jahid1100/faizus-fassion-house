
import { useEffect, useState } from 'react'
import './App.css'
import SingleProduct from './singleProduct/SingleProduct'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  // console.log(products)
  const [carts, setCarts] = useState([])

  const handleCart = (p) => {
    // console.log(p)
    // setCarts([p])
    const isExist = carts.find(item => item.id == p.id)
    if (!isExist) {
      setCarts([...carts, p])
    }
    else {
      alert('Already Exist')
    }
  }
  // console.log(carts)

  const handleDelete = (id) => {
    const newCart = carts.filter(item => item.id != id)
    setCarts(newCart)
  }

  return (
    <>
      <div className='main-container flex gap-4 p-4'>
        <div className='carts-container w-9/12 '>
          {
            products.map((pd, idx) => (
              <SingleProduct key={idx} product={pd} handleCart={handleCart}></SingleProduct>
            ))
          }
        </div>
        <div className='cart-container w-3/12 shadow-lg bg-blue-600 text-red-50 '>
          <h1 className='shadow-md p-4 text-center text-2xl'>Your Order</h1>
          <div className='cart-title flex justify-around ml-2'>
            <h5>Name</h5>
            <h5>Price</h5>
            <h5>Cancel</h5>
          </div>
          {
            carts.map((item) => (
              <div className='shadow-md mt-1 shadow-amber-200 cart-name-price-container space-x-10 ml-0'>
                <h5>{item.title.slice(0, 10)}</h5>
                <h5>${item.price}</h5>
                <button className='delete-btn pr-1' onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            ))
          }
        </div>
      </div>


    </>
  )
}

export default App
