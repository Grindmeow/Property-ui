import React, { useRef, useState, useEffect } from 'react'
import { reviewData } from '../Dummy/ReviewData';
import Slider from 'react-slick';
import { FaStar } from "react-icons/fa";


const Reviews = () => {



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  }


  return (
    <div className='pt-[60px] ml-[125px]'>

      <h1 className='text-3xl text-[#13263b] mb-16'>Customer Says</h1>




      <Slider {...settings}>
        {reviewData.map((data) => {
          return <div>
            <div className='h-[450px] w-[270px]'>


              <div className='flex flex-col items-baseline space-y-6'>

                <img className='h-[150px] w-[150px] rounded-full object-cover' src={data.img} alt="" />
                <div className='my-2'>
                  <div className=' text-sm flex gap-1'>
                    <p className='text-yellow-700  '><FaStar /></p>
                    <p className='text-yellow-700  '><FaStar /></p>
                    <p className='text-yellow-700  '><FaStar /></p>
                    <p className='text-yellow-700  '><FaStar /></p>
                    <p className='text-yellow-700  '><FaStar /></p>

                  </div>

                  <p className='font-semibold text-xl text-[#13263b]'>{data.name}</p>
                </div>


                <div className=''>
                  <p className='text-sm pb-3'>{data.review}</p>
                  <p className='text-sm text-gray-800'>{data.job}</p>
                </div>



              </div>

            </div>



          </div>

        })}

      </Slider>

    </div>

  )
}

export default Reviews
