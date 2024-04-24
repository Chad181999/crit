import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import Social1 from '/asset/images/social-icon1.png'
import Social2 from '/asset/images/social-icon2.png'
import Social3 from '/asset/images/social-icon3.png'

const footer = () => {
  return (
    <div className='footer-container'>
        <div className='title-contact'>
            <h1>CRIT</h1>
            <Link href='/'><a className ="email-contact">crit@nft.com</a></Link>
        </div>

        <div className='footer-menu'>
        <ul className ="footer-navigation">
        <Link href='/'><a className ="footer-navigation"><li>Home</li></a></Link>
        <Link href='/about'><a className ="footer-navigation"><li>About</li></a></Link>
        <Link href='/nft'><a className ="footer-navigation"><li>NFT</li></a></Link>
        <Link href='/blog'><a className ="footer-navigation"><li>BLog</li></a></Link>
        <Link href='/contact'><a className ="footer-navigation"><li>Contact</li></a></Link>
        <Link href='/wallet'><a className ="footer-navigation"><li>Wallet</li></a></Link>
        </ul>
        </div>

        <div className='social-icon-container'>
            <div className='footer-social'>
                <Image src={Social1}/>
            </div>
            <div className='footer-social'>
                <Image src={Social2}/>
            </div>
            <div className='footer-social'>
                <Image src={Social3}/>
            </div>
        </div>
    </div>

  )
}

export default footer