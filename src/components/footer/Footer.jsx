import React from 'react'
import { Link } from 'react-router-dom';
import myLogo2 from '../../assets/logo-dark.svg';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";





const Footer = () => {
  return (
    <div className='flex justify-between px-20 py-10 bg-[#2D314D]'>
        <div className=''>
            <Link to='/footer'><img className='down-button' src={myLogo2} /></Link>
            <div className='flex mt-[40px] gap-[15px] text-[#fff]'>
                <FaFacebook />
                <FaYoutube />
                <FaTwitter />
                <IoLogoWhatsapp />
                <FaInstagramSquare />

            </div>
        </div>

        <div className='flex items-center gap-[100px] text-white'>
            <div className='leading-10'>
                <ul>
                    <li>
                        <Link>About Us</Link>
                    </li>
                    <li>
                        <Link>Contact</Link>
                    </li>
                    <li>
                        <Link>Blog</Link>
                    </li>
                </ul>
            </div>

            <div className='leading-10'>
                <ul>    
                    <li>
                        <Link>Carrers</Link>
                    </li>
                    <li>
                        <Link>Support</Link>
                    </li>
                    <li>
                        <Link>Privacy Policy</Link>
                    </li>
                </ul>
            </div>
        </div>

        <div className='text-white'>
            <button className='py-3 px-7 bg-gradient-to-r from-green-400 to-blue-500 rounded-full text-white mb-5 border hover:border-black'>Request Invite</button>
            <p>© Easybank. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer