import React from 'react';
import DeliveryWallpaper from '../../assets/images/home-delivery-wallpaper.svg';
import DeliveryIcon from '../../assets/images/home-delivery-icon.png';

const HomeDelivery = () => {
  return (
    <div className='bg-white w-full h-auto mb-10 pt-5 pb-14'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex flex-wrap align-middle w-full'>
                <div className='w-full lg:w-[47%] flex flex-col justify-center align-middle mt-10 lg:mt-0'>
                    <p className='text-base font-medium text-start m-0 text-[#F9BA45]'>
                        HOME DELIVERY
                    </p>
                    <h3 className='text-4xl md:leading-[50px] text-black font-bold text-start mt-1'>
                        Sit at Home We Will Take<br/>Care Your Order
                    </h3>
                    <p className='text-base font-normal text-[#676767] mt-6'>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos                     </p>
                    <button className='bg-transparent rounded-xl w-full max-w-[186px] h-16 text-g-red border border-g-red mt-14'>
                        Explore Now
                    </button>
                </div>
                <div className='w-full lg:w-[47%] flex justify-center align-middle relative'>
                    <img className='w-[90%] md:w-[60%] m-auto' src={DeliveryWallpaper} alt='WhyChooseUsImage'/>
                    <div className='absolute top-[80%] md:top-[50%] right-[2%] md:right-[12%] translate-y-[-50%] w-32 md:w-auto bg-white rounded-xl shadow-choose-us p-3'>
                        <div className='w-full p-1 bg-gradient-to-r from-[#F54748] to-[#E53536] rounded-xl bg-opacity-50'>
                            <img className='w-16 mx-auto' src={DeliveryIcon} alt='Strawberry-2' />
                        </div>
                        <p className='text-black font-semibold text-sm text-center m-0'>
                            Melting Cheese
                        </p>
                        <p className='text-[#A4A5A5] font-normal text-xs text-center'>
                            Red Strawberry
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeDelivery