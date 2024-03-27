import './singleProduct.css'
const SingleProduct = ({product,handleCart}) => {
    // console.log(product)
    // handleCart(product)
    return (
        
            <div className="cart">
                <img className="cart-img" src={product.image} alt="" />
                <h1>{product.title.slice(0,10)}</h1>
                 <div className="cart-footer">
                    <h1>{product.price}</h1>
                    <button onClick={()=>handleCart(product)} className="btn">Add to Cart</button>
                 </div>
            </div>
       
    );
};

export default SingleProduct;