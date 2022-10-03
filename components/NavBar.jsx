import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">STF Creations</Link>
      </p>

      <button type="button"
      className="cart-icon" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>

      <Cart />
    </div>
  )
}

export default NavBar