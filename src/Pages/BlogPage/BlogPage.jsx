import React, { useEffect, useState } from 'react'; 
import { useLoaderData } from 'react-router-dom';
import Spinner from '../../Component/Spinner/Spinner';
import axios from 'axios';
import BlogCard from '../../Component/BlogCard/BlogCard';
 
 

 
const ref = React.createRef();
 
      
const BlogPage = ({setTitle}) => {
  
 
 
    const [loading, setLoading] = useState(true)
    const [blogData, setBlogData] = useState();
    const {blogDataLoad} = useLoaderData();
    
    useEffect(() => {
       if(loading){
    axios.get("/blog")
    .then(response=>{
      setBlogData(response.data)
      setLoading(false)
    })

   }
     
      
    
    }, []);
    return (
        <>
     

            <div ref={ref} className="max-w-screen-xl mx-auto px-5 sm:px-10 md:px-16 relative  mt-20 ">
    

 {loading?<>
  <Spinner/>
 </>: <>
 {blogData.map(e=><BlogCard question={e.question} answer={e.answer}/>  )}
 </>}
   
  
  </div>
</>

       
    );
}

export default BlogPage;
