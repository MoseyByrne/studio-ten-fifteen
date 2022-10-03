import React from 'react'
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart } = useStateContext();

  return (
    <div className='cart-container' ref={cartRef}>
      <button 
      type="button"
      className='cart-heading'
      onClick={() => setShowCart(false)}>
        <AiOutlineLeft />
        <span className='heading'>Your Cart</span>
        <span className='cart-num-items'>({totalQuantities} items)</span>
      </button>
    </div>
  )
}

export default Cart