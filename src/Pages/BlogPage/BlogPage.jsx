import React, { useEffect, useState } from 'react'; 
import { useLoaderData } from 'react-router-dom';
import Spinner from '../../Component/Spinner/Spinner';
 
 

 
const ref = React.createRef();
 
      
const BlogPage = () => {
  
 
 
    const [loading, setLoading] = useState(true)
    const [blogData, setBlogData] = useState();
    const {blogDataLoad} = useLoaderData();
    
    useEffect(() => {
       if(loading){
       
 


 
  Promise.all([blogDataLoad ])
  .then(values => {
    setBlogData(values[0].data)
      setLoading(false)
  })
   
 
      }
     
      
    
    }, []);
    return (
        <>
     

            <div ref={ref} className="max-w-screen-xl mx-auto px-5 sm:px-10 md:px-16 relative  mt-12 ">
    

 {loading?<>
  <Spinner/>
 </>: <>
 {blogData.map(e=><BlogCard question={e.question} answer={e.answer}/>  )}
 </>}
   
 {/* <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => 
        
        <div className='flex justify-center items-center'>

<button className='px-6 py-3 rounded-lg bg-green-700 text-white font-semibold' onClick={toPdf}>Generate Pdf</button>
        </div>

       
        
        
        }
      </Pdf> */}
  </div>
</>

       
    );
}

export default BlogPage;
