import React, { useEffect } from 'react'
import myLogo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { GiHamburger, GiHamburgerMenu } from "react-icons/gi";


const NavBar = () => {

    useEffect(() => {
        const dropDown = document.querySelector('ul')
        const hamBurger = document.querySelector('.hamBurg')
        const closeNav = document.querySelector('.close')


        hamBurger.addEventListener('click', () => {
            dropDown.style.top = "20%"
            closeNav.style.display = "block"
            hamBurger.style.display = "none"
        })
        
        closeNav.addEventListener('click', () => {
            dropDown.style.top = "-20%"
            closeNav.style.display = "none"
            hamBurger.style.display = "block"
        })

    },[])

  return (
    <div className='flex items-center justify-between px-20 py-5 bg-[#fff]'>
        <Link to="/"><img src={myLogo}/></Link>
        <ul className='flex items-center lg:gap-[100px] gap-[40px] text-[#A7A7A7] flex-col lg:flex-row fixed lg:sticky bg-white lg:border-none border rounded lg:bg-transparent top-[-20%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[30%] lg:py-0 py-8 transition duration-2000'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
        </ul>
        <button className='py-3 px-7 bg-gradient-to-r from-green-400 to-blue-500 rounded-full text-white border hover:border-black hidden lg:block'>Contact Us</button>

        <div className='block lg:hidden cursor-pointer p-[12px] text-3xl '>
            <GiHamburgerMenu className='hamBurg'/>
        </div>
        <div className='hidden close cursor-pointer p-[12px] text-3xl '>
            <GiHamburger className=''/>
        </div>

    </div>
  )
}

export default NavBar