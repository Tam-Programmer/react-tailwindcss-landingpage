import { useState } from 'react';
import {Menu, X} from 'lucide-react'
// import logo from '../assets/logo.png'
import tbds from '../assets/tbds.png'
import { navItems } from '../constants';
function NavBar() {
    const [mobileDrawerOpen,setMobileDrawerOpen] =useState(false);

    const toggleNavBar = () =>{
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
  return (
    <nav className="sticky backdrop-blur-lg py-3 top-0 z-50 border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className='h-10 w-10 mr-2' src={tbds} alt="logo" />
                    <span className="text-xl tracking-tight 
                            text-transparent bg-clip-text bg-gradient-to-r
                         from-blue-500 to-blue-800">True-Blue</span>                
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index} className=' hover:text-orange-600 relative group'>
                            <a href={item.href} className="inline-block py-2 transition-all duration-300 group-hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-500 after:w-0 after:transition-all after:duration-300">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center items-center space-x-2">
                    <a href="#" className="px-3 py-2 rounded-md border hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
                        Sign In
                    </a>
                    <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md">
                        Create an Account
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    {/* onClick, if mobile drawer open display X else display hamburger Menu */}
                    <button onClick={toggleNavBar}>{mobileDrawerOpen ? <X/> :<Menu />}</button> 
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 flex flex-col justify-center items-center bg-neutral-900 w-full p-12 lg:hidden">
                    <ul>
                    {navItems.map((item, index) => (
                        <li key={index} className="relative group py-1 hover:text-orange-600">
                            <a href={item.href} className="inline-block py-2 transition-all duration-300 group-hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-500 after:w-0 after:transition-all after:duration-300">
                                {item.label}
                            </a>
                        </li>
                    ))}
                    </ul>
                    <div className="flex space-x-6 mt-4">
                        <a href="#" className="px-3 py-2 rounded-md border hover:text-[#0011ff]">Sign In</a>
                        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md">Create an Account</a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default NavBar
