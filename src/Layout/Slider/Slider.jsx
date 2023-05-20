import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import axios from 'axios';

const Slider = ({children}) => {
  const [sliderData, setSliderData] = useState();
  const [currentSlider, setCurrentSlider] = useState(0); 
  const [loading, setLoading] = useState(true);
 

 
    return (
        <>
       
<section className='bg-[#DCE2CB] '>
{children}

<section className='flex flex-col md:flex-row md:pl-[5%]'>

<div className='flex flex-col basis-[55%] justify-center  gap-8  relative'>
<div  className='w-full absolute top-0  lg:top-16 flex justify-center'> 
 <img className='w-56' src="/assets/img/planebanner.png" alt="" />
 </div>
<h1 className='text-7xl font-bold'>A New Box Of Toys Every Month</h1>
<p className='text-2xl font-semibold'>Discover a World of Fun: Unleash Your Imagination with Our Exciting Toy Collection. From Classic Favorites to the Latest Innovations.</p>
<a className='bg-[#406147] w-[25%] text-center text-white font-semibold py-3 rounded-3xl' >Get Your Toys</a>
 

 
  </div>  
  <div className='flex basis-[45%]  justify-end'>
    <img className='w-[95%] ' src="/assets/img/bannerimg.png" alt="" />
  </div>  
</section>



</section>
        </>
    );
}

export default Slider;
