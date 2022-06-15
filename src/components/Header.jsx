import { faBars, faBasketShopping, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Logo from '../assets/images/logo.svg';

const Header = () => {

    const [toggle, setToggle] = useState(false);

    window.addEventListener('resize', () => {
        if (window.innerWidth > 767) {
            setToggle(false)
        }
    })

    return (
        <div className='bg-white w-full h-auto'>
            <div className='container w-full items-center mx-auto relative'>

                {/* For Desktop View  */}
                <div className='flex flex-wrap justify-between w-full py-5'>
                    <img className='w-24' src={Logo} alt='NavLogo' />
                    <ul className='list-none hidden md:flex gap-5 lg:gap-10'>
                        <li className='text-base font-medium text-g-gray'>Home</li>
                        <li className='text-base font-medium text-g-gray'>Menu</li>
                        <li className='text-base font-medium text-g-gray'>Service</li>
                        <li className='text-base font-medium text-g-gray'>Shop</li>
                    </ul>
                    <div className='hidden md:flex flex-row justify-between'>
                        <div className='relative flex flex-row align-middle mr-3'>
                            <label className='absolute top-[2px]'>
                                <FontAwesomeIcon color='#8B8B8B' icon={faSearch} />
                            </label>
                            <input className='ml-7 focus:border-none border-r-[2px] border-[#f2f2f2] focus:outline-none' placeholder='Search' />
                        </div>
                        <div className='relative flex flex-row align-middle min-w-[40px] ml-2'>
                            <FontAwesomeIcon className='text-xl mt-auto' color='#3c3737' icon={faBasketShopping} />
                            <div className='absolute top-[-12px] right-[-8px] rounded-[50%] w-5 h-5 bg-g-red text-white text-xs leading-5 text-center shadow-cart-shadow font-semibold'>
                                2
                            </div>
                        </div>
                    </div>
                    <button className='block md:hidden' onClick={() => setToggle(true)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>

                {/* Mobile Navbar */}
                {toggle ?
                    <div className={`absolute top-0 right-0 bg-slate-800 ${toggle ? 'flex' : 'hidden'} flex-col gap-8 align-middle min-w-[250px] w-[50%] p-5 min-h-[100vh]`}>
                        <button className='block md:hidden ml-auto' onClick={() => setToggle(false)}>
                            <FontAwesomeIcon color='#ffffff' icon={faXmark} />
                        </button>
                        <ul className='list-none flex flex-col gap-3'>
                            <li className='text-base font-medium text-white'>Home</li>
                            <li className='text-base font-medium text-white'>Menu</li>
                            <li className='text-base font-medium text-white'>Service</li>
                            <li className='text-base font-medium text-white'>Shop</li>
                        </ul>
                        <div className='relative flex flex-row align-middle mr-3'>
                            <label className='absolute top-[2px]'>
                                <FontAwesomeIcon color='#8B8B8B' icon={faSearch} />
                            </label>
                            <input className='ml-7 focus:border-none  bg-transparent focus:outline-none text-white' placeholder='Search' />
                        </div>
                        <div className='relative flex flex-row align-middle min-w-[40px] mt-2'>
                            <FontAwesomeIcon className='text-xl mt-auto' color='#ffffff' icon={faBasketShopping} />
                            <div className='absolute top-[-14px] left-7 rounded-[50%] w-5 h-5 bg-g-red text-white text-xs leading-5 text-center shadow-cart-shadow font-semibold'>
                                2
                            </div>
                        </div>
                    </div> : null}

            </div>
        </div>
    )
}

export default Header