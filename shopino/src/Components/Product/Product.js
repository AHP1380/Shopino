import React from 'react'
import "./Product.css"
//import img1 from "../../Pictures/fifth-slider.jpg"
import { useStateValue } from '../StateProvider/StateProvider';

function Product({Title  , Price , Image , Rate ,Id }) {

    const [ {basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        //alert(`${{ Title }} added to your cart`);

        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                Id:Id,
                Title:Title,
                Image:Image,
                Price:Price,
                Rate:Rate,
            },
        });
    }

  return (
    <div className="Product">
        <p className="Info">
            {Title}
        </p>
        <p className="Price">
            <small className="dollar">
                $
            </small>
            <strong>
                {Price}
            </strong>
        </p>
        <div className="Rate">
            {Array(Rate).fill().map((_,i) =>
                (
                 <p>⭐</p>
                ))}  
        </div>
        <img className="Image" src={Image} alt={Title} />
        <button onClick={addToBasket} className="Button">
            افزودن به سبد خرید
        </button>
    </div>
  )
}

export default Product