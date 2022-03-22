import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'
const Product = (props) => {
    const { name, seller, price, ratings, img } = props.product;
    return (
        <div className='img-container'>
            <img src={img} alt="" />
            <div className='cart-info'>
                <h4 className='name-fix'>{name}</h4>
                <p className='name-fix'>Price: {price}</p>
                <p className='cart-text-style'>Manufacturer : {seller}</p>
                <p className='cart-text-style'>Rating: {ratings}</p>
            </div>
            <button onClick={() => props.addToCart(props.product)} className='cart-btn'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;