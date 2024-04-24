import React from 'react'
import Link from "next/link"

const header = () => {
  return (
    <header className="navigation-menu">
        <nav className="nav-header">
        <Link href='/'><h2 className ="logo-navigation">CRIT</h2></Link>
        <ul className ="ul-navigation">
        <Link href='/'><a className ="anchor-navigation"><li>Home</li></a></Link>
        <Link href='/about'><a className ="anchor-navigation"><li>About</li></a></Link>
        <Link href='/nft'><a className ="anchor-navigation"><li>NFT</li></a></Link>
        <Link href='/blog'><a className ="anchor-navigation"><li>BLog</li></a></Link>
        <Link href='/contact'><a className ="anchor-navigation"><li>Contact</li></a></Link>
        <Link href='/wallet'><a className ="anchor-navigation"><li>Wallet</li></a></Link>
        <button>BUY NOW</button> 
        </ul>
        </nav>
        </header>
  )
}

export default header