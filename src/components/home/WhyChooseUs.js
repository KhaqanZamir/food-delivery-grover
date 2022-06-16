import React from 'react';
import WhyChooseUsImage from '../../assets/images/why-choose-us.svg';
import Strawberry from '../../assets/images/strawberry-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';

const WhyChooseUs = () => {
  return (
    <div className='bg-white w-full h-auto mb-10 pt-5 pb-14'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex flex-wrap align-middle w-full'>
                <div className='w-full lg:w-[63%] flex justify-center align-middle relative'>
                    <img className='w-[90%] md:w-[60%] m-auto' src={WhyChooseUsImage} alt='WhyChooseUsImage'/>
                    <div className='absolute top-[80%] md:top-[50%] right-[2%] md:right-[12%] translate-y-[-50%] w-32 md:w-auto bg-white rounded-xl shadow-choose-us p-3'>
                        <p className='text-black font-semibold text-sm text-center m-0'>
                            Melting Cheese
                        </p>
                        <p className='text-[#A4A5A5] font-normal text-xs text-center'>
                            Red Strawberry
                        </p>
                        <img className='w-32 mx-auto mt-4' src={Strawberry} alt='Strawberry-2' />
                        <div className='flex flex-row justify-start align-middle gap-1 -mt-4'>
                            <FontAwesomeIcon className='my-auto' color='#FDC55E' icon={faStar}/>
                            <span>3.8</span>
                        </div>
                        <div className='flex flex-row justify-between align-middle w-full mt-1'>
                            <p className='m-0 font-bold text-base md:text-lg text-black tracking-tight'>
                                $49.66
                            </p>
                            <div className='w-5 h-5 md:w-8 md:h-8 bg-g-red rounded md:rounded-xl cursor-pointer flex justify-center align-middle'>
                                <FontAwesomeIcon className='m-auto' color='#ffffff' icon={faPlus} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-[32%] flex flex-col justify-center align-middle mt-10 lg:mt-0'>
                    <p className='text-base font-medium text-start m-0 text-[#03A66B]'>
                        WHY CHOOSE US
                    </p>
                    <h3 className='text-4xl md:leading-[50px] text-black font-bold text-start mt-1'>
                        Find Favorites And<br/>Discover New Ones
                    </h3>
                    <p className='text-base font-normal text-[#676767] mt-6'>
                        At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis praesen voluptatum deleniti.
                    </p>
                    <button className='bg-g-red rounded-xl w-full max-w-[186px] h-16 text-white mt-14'>
                        Explore Now
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs