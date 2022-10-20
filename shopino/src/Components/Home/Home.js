import React from 'react'
import "./Home.css"
import Slideshow from "../Slider/Slider"
import Product from "../../Components/Product/Product"

function Home() {
  return (
    <div className ="Home">
        <div className ="Home_Container">
          <Slideshow />
        </div>
        <div className ="Home_Row">
                    <Product Title="OLYMPUS OM-D E-M5 Mark III Black Body with Black M.Zuiko Digital ED 12-45mm F4.0 PRO Lens Kit" 
                             Price={1399.00}
                             Rate={3} 
                             Image="https://m.media-amazon.com/Images/I/81D1i4xJc9L._AC_SX466_.jpg" 
                             Id = {Math.random()}
                    />
                    
                    <Product Title="GreenForest Folding Desk No Assembly Required, 2-Tier Small Computer Desk with Shelf Space Saving Foldable Table for Small Spaces, Espresso"
                             Price={71.99} 
                             Rate={5} 
                             Image="https://m.media-amazon.com/Images/I/71z7gvO3vGL._AC_SX679_.jpg" 
                             Id = {Math.random()}
                    />
        </div>
        <div className ="Home_Row">
                    <Product Title="GE Profile OPAL01GEPKT Opal | Countertop Nugget Ice Maker, Stainless Steel Wrap with Gray Accents & LED Lighting"
                             Price={549.000} 
                             Image="https://m.media-amazon.com/Images/I/81b5KcoaWGL._AC_SX679_.jpg"
                             Rate={4}
                             Id = {Math.random()}
                    />

                    <Product Title="Garmin 010-01769-11 Vívoactive 3, GPS Smartwatch Contactless Payments Built-In Sports Apps, Black/Slate"
                             Price={161.12}
                             Image="	https://m.media-amazon.com/Images/I/51E19y80s1L._AC_SX679_.jpg"
                             Rate={4}
                             Id = {Math.random()}
                    />

                    <Product Title="New Apple iPhone 12 Pro (512GB, Silver) [Locked] + Carrier Subscription"
                             Price={1299.00}
                             Rate={4}
                             Image="https://m.media-amazon.com/Images/I/71gquzn6vIL._FMwebp__.jpg"
                             Id = {Math.random()}
                    />
                    <Product Title="New Apple iPhone 12 Pro (512GB, Silver) [Locked] + Carrier Subscription"
                             Price={1299.00}
                             Rate={4}
                             Image="https://m.media-amazon.com/Images/I/71gquzn6vIL._FMwebp__.jpg"
                             Id = {Math.random()}
                    />
        </div>
        <div className ="Home_Row">
                    <Product Title='Samsung QN55QN90AA 55" Neo QLED QN90 Series 4K Smart TV Titan Black with a Samsung HW-T650 Bluetooth Soundbar with Dolby Audio Wireless Subwoofer (2021)'
                             Price={1870.98}
                             Rate={5}
                             Image="https://m.media-amazon.com/Images/I/81ue--iyf9S._AC_SX679_.jpg"
                             Id = {Math.random()}   
                    />
        </div>
        <div className ="Home_Row">
                    <Product Title="OLYMPUS OM-D E-M5 Mark III Black Body with Black M.Zuiko Digital ED 12-45mm F4.0 PRO Lens Kit" 
                             Price={1399.00}
                             Rate={3} 
                             Image="https://m.media-amazon.com/Images/I/81D1i4xJc9L._AC_SX466_.jpg" 
                             Id = {Math.random()}
                    />
                    
                    <Product Title="GreenForest Folding Desk No Assembly Required, 2-Tier Small Computer Desk with Shelf Space Saving Foldable Table for Small Spaces, Espresso"
                             Price={71.99} 
                             Rate={5} 
                             Image="https://m.media-amazon.com/Images/I/71z7gvO3vGL._AC_SX679_.jpg" 
                             Id = {Math.random()}
                    />
                    <Product Title="New Apple iPhone 12 Pro (512GB, Silver) [Locked] + Carrier Subscription"
                             Price={1299.00}
                             Rate={4}
                             Image="https://m.media-amazon.com/Images/I/71gquzn6vIL._FMwebp__.jpg"
                             Id = {Math.random()}
                    />
        </div>
    </div>
  )
}

export default Home