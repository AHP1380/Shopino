import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../StateProvider/StateProvider';
import { getBasketTotal } from '../Reducer/Reducer';
//import { useHistory } from 'react-router';
import { useNavigate } from 'react-router-dom';

function Subtotal() {

    const [ {basket}, dispatch] = useStateValue();

    const history = useNavigate();

  return (
    <div className='subtotal'>
         <CurrencyFormat
            renderText={(value) => (
                <>
                    <p className="P-style">
                        جمع کل ( {basket?.length} کالا ) : <strong>{value}</strong>
                    </p>
                    <small className="subttotal-gift">
                        <input type="checkbox" />
                        شامل هدیه است 
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button onClick={e => history('/payment')}>
                ادامه فرایند خرید
            </button>
        </div>
  )
}

export default Subtotal