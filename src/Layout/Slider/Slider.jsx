import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";
const Slider = ({children}) => {
  const [sliderData, setSliderData] = useState();
  const [currentSlider, setCurrentSlider] = useState(0); 
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    AOS.init();
  }, []);

 
    return (
        <>
       
<section className='bg-[#DCE2CB] '>
{children}

<section className='flex flex-col-reverse md:flex-row  md:pl-[5%]   md:gap-0'>

<div data-aos="fade-right" className='flex flex-col basis-[55%] justify-center  gap-8  relative  mx-5 md:mx-0'>
<div  className='w-full absolute top-0  lg:top-16 flex justify-center opacity-0 md:opacity-100'> 
 <img className='w-36 md:w-56' src="/assets/img/planebanner.png" alt="" />
 </div>
<h1 className='text-3xl md:text-7xl font-bold'>A New Box Of Toys Every Month</h1>
<p className='text-base md:text-2xl font-semibold'>Discover a World of Fun: Unleash Your Imagination with Our Exciting Toy Collection. From Classic Favorites to the Latest Innovations.</p>
<a className='bg-[#406147]  text-center text-white font-semibold py-3 rounded-3xl  w-full md:w-[25%] mb-12 ' >Get Your Toys</a>
 

 
  </div>  
  <div data-aos="fade-left" className='flex basis-[45%]  justify-end'>
    <img   className='w-[95%] ' src="/assets/img/bannerimg.png" alt="" />
  </div>  
</section>



</section>
        </>
    );
}

export default Slider;
