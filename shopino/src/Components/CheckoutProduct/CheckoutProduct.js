import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from '../StateProvider/StateProvider';

function CheckoutProduct({Image, Id, Price, Rate, Title}) {
  
    const[{ basket }, dispatch] = useStateValue();
    
    const RemoveFromBasket = () => {
        //remove the item from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            Id:Id,
        })
        
    }

    return (
    <div className="CheckoutProduct">
        <img src={Image} className="Image" />

        <div className="Info">
            <p className="Title">
                {Title}
            </p>
            <p className="Price">
                <small>
                    $
                </small>
                <strong>
                    {Price}
                </strong> 
            </p>
            <div className="Rate">
                        {Array(Rate)
                        .fill()
                        .map((_, i) =>(
                            <p>⭐</p>
                        ))}
            </div>
            <button className="Button" onClick={RemoveFromBasket}>
                        حذف از سبد خرید 
            </button>
        </div> 
    </div>
  )
}

export default CheckoutProduct