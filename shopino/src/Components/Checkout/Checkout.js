import React from 'react'
import "./Checkout.css"
import Subtotal from "../Subtotal/Subtotal"
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { getBasketTotal } from '../Reducer/Reducer'
import { useStateValue } from '../StateProvider/StateProvider'

function Checkout() {

    const[{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="Checkout">
        <div className="LeftPart">
            {/* <img className="Ad" src="" />  */}
        </div>
        <div className="RightPart">
            <div>
                <h2 className="TitleOrg">سبد خرید شما</h2>
                {basket.map( item => (
                    <CheckoutProduct 
                        Id={item.Id}
                        Title={item.Title}
                        Price={item.Price}
                        Rate={item.Rate}
                        Image={item.Image} 
                    />
                ))}
                
            </div>
            <div className='Sub'>
                <Subtotal />
            </div>
            
        </div>
    </div>
  )
}

export default Checkout