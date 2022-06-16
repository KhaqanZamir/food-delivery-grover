import React from 'react';
import ShippingVan from '../../assets/images/shipping-van.svg';
import MoneyEnvelope from '../../assets/images/money-envelope.svg';
import SecureCheckout from '../../assets/images/secure-checkout.svg';

const WhatWeServe = () => {
  return (
    <div className='bg-g-lighterRed w-full h-auto my-16 py-16'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex flex-col align-middle w-full'>
                <p className='text-base font-medium text-center m-0 text-[#F54748]'>
                    What we Serve
                </p>
                <h3 className='text-4xl text-black font-bold text-center'>
                    Fruit And Vegetable Delivered<br/>To Your Home
                </h3>
                <div className='mt-20 flex flex-wrap justify-evenly align-middle w-full'>
                    <div className='introCard relative'>
                      <div className='flex flex-col align-middle w-full max-w-[300px] h-full max-h-[310px] bg-white py-10 rounded-xl'>
                        <img className='w-28 mx-auto' src={ShippingVan} alt='shipping-van' />
                        <p className='text-black text-2xl font-semibold text-center mt-5'>Free shipping</p>
                        <p className='text-[#676767] text-sm font-normal text-center mx-auto leading-6 w-[75%] mt-2'>
                          Enjoy Order in a hand using the fresness of groceries
                        </p>
                      </div>
                    </div>
                    <div className='introCard relative'>
                      <div className='flex flex-col align-middle w-full max-w-[300px] h-full max-h-[310px] bg-white py-10 rounded-xl'>
                        <img className='w-28 mx-auto' src={MoneyEnvelope} alt='shipping-van' />
                        <p className='text-black text-2xl font-semibold text-center mt-1'>15 days returns</p>
                        <p className='text-[#676767] text-sm font-normal text-center mx-auto leading-6 w-[75%] mt-2'>
                          Order in a handy way using the freshness of the groceries.
                        </p>
                      </div>
                    </div>
                    <div className='introCard relative'>
                      <div className='flex flex-col align-middle w-full max-w-[300px] h-full max-h-[310px] bg-white py-10 rounded-xl'>
                        <img className='w-[105px] mx-auto' src={SecureCheckout} alt='shipping-van' />
                        <p className='text-black text-2xl font-semibold text-center'>Secure checkout</p>
                        <p className='text-[#676767] text-sm font-normal text-center mx-auto leading-6 w-[75%] mt-2'>
                          If you get rotten items - return immediately to us.
                        </p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatWeServe