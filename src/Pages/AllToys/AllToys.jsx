import React, { useEffect, useState } from 'react';
import ShopCard from '../../Component/ShopByCategory/ShopCard';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Component/Spinner/Spinner';
const AllToys = ({setTitle}) => {
    const [loading, setLoading] = useState(true)
    const [renderData, setRenderData] = useState(null);
    const [toysData, setToysData] = useState(null)
    const [searchParams] = useSearchParams(); 
    const search = searchParams.get('search');
 
 const navigate = useNavigate();
 
    
    useEffect(() => {
        setTitle("All Toy")
        setLoading(true)
        if(search){
            
            axios.get(`/search/${search}`)
                .then(response => {
                    let data = response.data
                    setToysData(data)
                    setRenderData(data)
                    setLoading(false)

                })
        }else if (loading) {
            let search = ""
            axios.get("/toys/20")
                .then(response => {
                    let data = response.data
                    setToysData(data)
                    setRenderData(data)
                    setLoading(false)

                })
        }
    }, [search]);

    const formSubmitHandler = (e)=>{
        e.preventDefault();
        let search = e.target.search.value
        navigate(`/toys?search=${search}`)
    }
    
    return (
        <>
            <section className='flex flex-col items-center justify-center mt-20 space-y-8'>
            <h1 className='text-4xl font-bold text-center'>All Toys</h1>

 
            <form onSubmit={formSubmitHandler} className="flex justify-center items-center  relative pt-4 w-[60%]">
  <input
    type="text"
    name="search"
    className="bg-gray-200 px-4  hover:border-none hover:outline-none  focus:border-none focus:outline-none py-3 w-full rounded-xl"
    placeholder="Search Toy Name Here"
  />
  <button className="absolute right-3" type="submit">
  
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  </button>
</form>


                <div className='grid grid-cols-4 gap-6 '>
                    {loading ? <>
                    <Spinner/>
                    </> : <>
                        {renderData.map(e => {
                            return <ShopCard
                                key={e._id}
                                _id={e._id}
                                seller={e.seller}
                                selleremail={e.selleremail}
                                toyname={e.toyname}
                                category={e.category}
                                price={e.price}
                                quantity={e.quantity}
                                rating={e.rating}
                                img={e.img} />
                        })}
                    </>}
                </div>

            </section>
        </>
    );
}

export default AllToys;
