import React, { useState } from 'react'
import "./style.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardsData from "./CardData";
import { addtocart } from '../redux/features/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';


const Home = () => {
  const [cartData,setCartData] = useState(CardsData);
  const dispatch = useDispatch();


  // add to cart
const send = (e)=>{
  dispatch(addtocart(e));
  toast.success("Item added In Your Cart")

}
  return (
    <>
      <section className='item_section mt-4 container'>
        <h2 className='px-4' style={{fontWeight:"400"}}>Resaurants in Ahmedabad Open now</h2>
        <div className='row mt-2 d-flex justify-content-around align-item-center'>
          {
            cartData.map((Element,index)=>{
              return(
                <>
                  <Card className='hove mb-4' style={{width:"22rem",border:"none"}}>
            <Card.Img variant='top' className='cd' src={Element.imgdata} />
            <div className='card_body'>
              <div className='upper_data d-flex justify-content-between align-item-center'>
                <h4 className='mt-2'>{Element.dish}</h4>
                <span className=''>{Element.rating}&nbsp;★</span>
              </div>
              <div className='lower_data d-flex justify-content-between'>
                <h5>{Element.address}</h5>
                <span>{Element.price}</span>
              </div>
              <div className='extra'></div>
              <div className='last_data d-flex justify-content-between align-items-center'>
                <img src={Element.arrimg} className='limg' alt="" />
                <button className='mt-2 mb-2' style={{width:"150px",background:"#ff3054bd",border:"none"}} variant='outline-light' onClick={()=>send(Element)}>Add To Cart</button>
                <img src={Element.delimg} className='laimg' alt="" />
              </div>
            </div>
          </Card>
                </>
              )
            })
          }
          
        </div>
      </section>
    </>
  )
}

export default Home