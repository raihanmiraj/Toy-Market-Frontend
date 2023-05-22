import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const TopRatedProduct = ({toyData}) => {
const [loading, setLoading] = useState(true)
const [data,setData] = useState(null)
useEffect(() => {
     toyData.sort((a, b) => b.rating - a.rating);
     setLoading(false)
     

     const nextButton = document.querySelector(".next");

     const prevButton = document.querySelector(".prev");
    nextButton.addEventListener("click", () => {
        let slidesContainer = document.querySelector(".slides-container");
        let slideWidth = slidesContainer.querySelector(".slide").clientWidth;
            const prevButton = document.querySelector(".prev");
    
      slidesContainer.scrollLeft += slideWidth * 2;
    });
    
    prevButton.addEventListener("click", () => {

        let slidesContainer = document.querySelector(".slides-container");
        let slideWidth = slidesContainer.querySelector(".slide").clientWidth;
      slidesContainer.scrollLeft -= slideWidth * 2;
    });
}, []);


    return (
        <>
            <div
  id="app"
  className="max-w-screen-lg mx-auto px-4 md:px-8 py-12 transition-all duration-500 ease-linear mt-20"
>
<div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            
            <h1 className="text-gray-900 text-4xl font-bold mb-8">
            Top Rated Product
            </h1>
            
            <p className="text-gray-700 text-lg font-light">
              This product is top rated by seller and buyer
            </p>
          </div>
        </div>
  <div className="relative">
    <div className="slides-container h-72 flex snap-x snap-mandatory overflow-hidden  space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0">
  
    


{!loading && toyData.map(e=>{
    return <>
      <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden bg-[#DCE2CB] p-8 relative">
        <img
          className="w-full h-full object-cover"
          src={e.img}
          alt="mountain_image"
        />
           <div className='absolute top-6 right-6 flex justify-center items-center gap-1' >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-4 h-4 inline fill-yellow-500 text-yellow-500">
            
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
<span className='text-yellow-700 font-semibold text-am'>{e.rating}</span>
        </div>
      </div>
    </>
})}

    
       
      
    </div>
    <div className="absolute top-0 -left-4 h-full items-center hidden md:flex">
      <button
        role="button"
        className="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
        aria-label="prev"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
    <div className="absolute top-0 -right-4 h-full items-center hidden md:flex">
      <button
        role="button"
        className="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
        aria-label="next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  </div>
</div>

        </>
    );
}

export default TopRatedProduct;
