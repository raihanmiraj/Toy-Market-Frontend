import React, { useEffect, useState } from 'react';
import ShopCard from './ShopCard';
import axios from 'axios';

const ShopByCategory = () => {
    const [loading, setLoading] = useState(true)
    const [renderData, setRenderData] = useState(null);
    const [toysData, setToysData] = useState(null)
    const [showCategory, setShowCategory] = useState('car')
    const [category, setCategory] = useState([
        {
            name: "Car",
            id: "car"
        },
        {
            name: "Bus",
            id: "bus"
        },
        {
            name: "Truck",
            id: "truck"
        },
        {
            name: "Bike",
            id: "bike"
        }
    ])
    useEffect(() => {
        if (loading) {
            axios.get("/toys")
                .then(response => {
                    let data = response.data
                    setToysData(data)
                    setRenderData(data.filter(e => e.category == showCategory))
                    setLoading(false)

                })
        }
    }, []);
    const handleCategory = (id) => {
        setShowCategory(id)
        console.log(toysData)
        console.log(toysData.filter(e => e.category == id))
        setRenderData(toysData.filter(e => e.category == id))
    }
    return (
        <>
            <section className='flex flex-col items-center justify-center mt-20 space-y-8'>
            <h1 className='text-4xl font-bold text-center'>Shop By Category</h1>

<div className='flex justify-center'>
    <p className='w-[60%] text-center font-semibold'>
    The toy car is a stylish and durable miniature replica of a real car, designed for endless fun and imaginative play. Its vibrant colors and realistic details make it perfect for zooming around on any surface, providing hours of exciting adventures.
    </p>
</div>

                <div className="tabs tabs-boxed">
                                    {
                        category.map(e => {
                            return <button  key={e.id} onClick={() => handleCategory(e.id)} id={e.id} className={`tab tab-lg ${e.id == showCategory && "tab-active"}`}>{e.name}</button>
                        })
                    }
                </div>

                <div className='grid grid-cols-4 gap-6'>
                    {loading ? <></> : <>
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

export default ShopByCategory;
