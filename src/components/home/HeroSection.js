import React from 'react';
import { faCartPlus, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StrawberryIcon from '../../assets/images/strawberry-icon.png';
import HeroImage from '../../assets/images/home-hero-image.png';
import OrangeIcon from '../../assets/images/orange-icon.png';
import WatchIcon from '../../assets/images/watch-icon.png';
import HomeCurveLine from '../../assets/images/home-curve-line.png';

const HeroSection = () => {
  return (
    <div className='bg-white w-full h-auto my-16'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex flex-wrap align-middle w-full my-10'>

                <div className='w-full lg:w-[50%] flex flex-col align-middle'>    
                    <div className='flex flex-row align-middle bg-g-lightRed rounded-full h-12 pl-6 pr-1 w-fit'>
                        <span className='text-g-red text-xl h-fit my-auto'>More than faster</span>
                        <img className='h-[68px] object-center' src={StrawberryIcon} alt='strawIcon' />
                    </div>
                    <h2 className='text-5xl md:text-7xl text-black leading-tight md:leading-[88px] font-extrabold mt-5'>
                        Groceries delivered in as little as <span className='font-normal text-g-red'>2 hours</span>
                    </h2>
                    <p className='text-[#676767] text-xl font-normal mt-5'>
                        Grocen atssures fresh grocery every morning to your family without getting out in this pandemic.
                    </p>
                    <div className='flex flex-row gap-5 justify-start mt-5'>
                        <button className='bg-g-red rounded-xl w-full max-w-[186px] h-16 text-white'>
                            Order Now
                        </button>
                        <button className='flex align-middle justify-center gap-5 h-16 px-2'>
                            <div className='flex align-middle justify-center rounded-full shadow-play-home bg-white w-10 h-10 my-auto'>
                                <FontAwesomeIcon className='my-auto' color='#FDC55E' icon={faPlay} />
                            </div>
                            <span className='my-auto'>Order Process</span>
                        </button>
                    </div>
                </div>

                <div className='w-full lg:w-[50%] relative my-10 lg:mt-0'>
                    <div className='absolute top-[60%] md:top-0 left-0 md:left-6 shadow-orange-home max-w-[100px] md:max-w-[150px] w-full pt-2 md:pt-5 rounded-xl bg-white'>
                        <img className='mx-auto w-16 md:w-28' src={OrangeIcon} alt='OrangeIcon' />
                        <p className='my-0 text-center mt-[-10px] md:mt-[-20px] text-base md:text-lg leading-tight'>Fresh Orange</p>
                        <hr className='h-1 bg-g-orange w-[50%] mx-auto mt-1 rounded-full'></hr>
                        <h4 className='text-center mt-1 md:mt-2 font-bold text-base md:text-xl'>$44.60</h4>
                        <p className='my-0 text-center text-xs md:text-sm text-[#A5A5A5]'>Free Shipping</p>
                        <div className='mb-[-25px] md:mb-[-15px] rounded-xl bg-[#FF7071] p-2 w-10 h-10 mx-auto flex mt-5'>
                            <FontAwesomeIcon className='m-auto' color='#ffffff' icon={faCartPlus} />
                        </div>
                    </div>
                    <img className='w-full max-w-[280px] m-auto' src={HeroImage} alt='HeroImage' />
                    <div className='absolute top-[-20px] md:top-0 right-0 shadow-delivery-time max-w-[150px] w-full rounded-xl bg-white flex gap-2 p-2'>
                        <img className='w-9 h-9 my-auto' src={WatchIcon} alt='WatchHome' />
                        <div>
                            <p className='m-0 text-black font-medium text-base'>Delivery</p>
                            <span className='m-0 text-gray-400 text-xs font-medium'>30 minutes</span>
                        </div>
                    </div>
                    <img className='absolute top-[70px] -right-4 md:right-16' src={HomeCurveLine} alt='HomeCurveLine' />
                </div>

            </div>
        </div>
    </div>
  )
}

export default HeroSection