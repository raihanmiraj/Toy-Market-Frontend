import React from 'react';

const ShopCard = ({_id, seller, selleremail, toyname, category, price, quantity, rating, img}) => {
    return (
        <>
           <div className="flex-shrink-0   relative  overflow-hidden bg-green-500 rounded-lg  shadow-lg">
  <svg
    className="absolute bottom-0 left-0 mb-8"
    viewBox="0 0 375 283"
    fill="none"
    style={{ transform: "scale(1.5)", opacity: "0.1" }}
  >
    <rect
      x="159.52"
      y={175}
      width={152}
      height={152}
      rx={8}
      transform="rotate(-45 159.52 175)"
      fill="white"
    />
    <rect
      y="107.48"
      width={152}
      height={152}
      rx={8}
      transform="rotate(-45 0 107.48)"
      fill="white"
    />
  </svg>
  <div className="relative pt-10 px-10 flex items-center justify-center">
    <div
      className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
      style={{
        background: "radial-gradient(black, transparent 60%)",
        transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
        opacity: "0.2"
      }}
    />
    <img
      className="relative w-40"
      src={img}
      alt=""
    />
  </div>
  <div className="relative text-white px-6 pb-6 mt-6">
    <span className="block opacity-75 -mb-1 uppercase">{category}</span>
    <div className="flex justify-between">
      <span className="block font-semibold text-xl truncate">{toyname}</span>
      <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
        ${price}
      </span>
    </div>


    <div class="flex justify-between items-center mt-5">
        <div className='text-sm truncate flex justify-center items-center gap-1' >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-4 h-4 inline fill-yellow-500 text-yellow-500">
            
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
<span className='text-white font-semibold text-am'>5.1</span>
        </div>
        <div class="flex items-center gap-1">
          
  <button class="text-sm  text-white border border-white px-2 rounded-lg hover:bg-[#406147]">
            <span className='flex justify-center items-center space-x-1'>
            <svg viewBox="0 0 24 24" class="inline w-4 h-4">
              <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
            </svg> 
            <span>View</span>
            </span>
          </button>
          <button class=" ">
        
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="currentColor"
    className="bi bi-bag-plus"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
    />
    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
  </svg>
 
          </button>
        </div>
      </div>
  

  </div>
</div>

        </>
    );
}

export default ShopCard;
