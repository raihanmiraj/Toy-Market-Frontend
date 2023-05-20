import axios from 'axios';
import React, { useContext, useState ,useEffect} from 'react'; 
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthContextProvider';
 
 
  

const AddAToyPage = () => {
    const [loading, setLoading] = useState(true);
    const [toyData, setToyData] = useState(null);
    const [message, setMessage] = useState(null);
    const [progresssending, setProgresssending] = useState(false);
    const  { user, toastPush}  = useContext(AuthContext);
     useEffect(() => {
        setToyData({...toyData, seller:user.displayName, selleremail:user.email})
        setLoading(false)
      }, []);
      const formSubmitHandler = (e)=>{
        setToyData({...toyData, [e.target.id]:e.target.value})
        setProgresssending(true)
          e.preventDefault()
//   let price = e.target.price.value
//   let quantity = e.target.quantity.value
//   let description = e.target.description.value
  axios.post("/addtoy",toyData)
.then(response=>{ 
    setProgresssending(false)
    toastPush("Toy Added Successfully")
})
.catch(err=>{
    console.log(err)
    toastPush("Toy Added Failed")
})
 
  
      }
  
      const inputChangeHandler =(e)=>{
          setToyData({...toyData, [e.target.id]:e.target.value})
          setMessage(null)
      } 
 

      return (
          <>
          <section className='flex flex-col justify-center items-center space-y-5 mt-20'>
  <h1 className='text-3xl font-semibold'>Add a Toy</h1>
{loading?<></>: <form action="" className='w-[90%] md:w-[50%]' onSubmit={formSubmitHandler}>
 
 <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Image Url</span>
        </label>
        <input name='img'   id='img'   onChange={inputChangeHandler} type="text" placeholder="Image Url" className="input input-bordered w-full " />
       </div>

  <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Toy Name</span>
        </label>
        <input name='toyname'   id='toyname'   onChange={inputChangeHandler} type="text" placeholder="ToyName" className="input input-bordered w-full " />
       </div>
       <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Seller Name</span>
        </label>
        <input name='seller'   id='seller' value={toyData.seller}  onChange={inputChangeHandler} type="text" placeholder="sellername" className="input input-bordered w-full " />
       </div>
       <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Seller Email</span>
        </label>
        <input name='selleremail'   id='selleremail' value={toyData.selleremail}  onChange={inputChangeHandler} type="text" placeholder="Seller Email" className="input input-bordered w-full " />
       </div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Category</span>
        </label>
          <select  name='category'   id='category'   onChange={inputChangeHandler} type="text" placeholder="Category"  className="select select-bordered w-full">
    <option disabled selected>Pick one</option>
    <option value="bus">Bus</option>
    <option value="car">Car</option>
    <option value="bike">Bike</option>
    <option value="truck">Truck</option> 
  
  </select>

       </div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input name='price'   id='price'   onChange={inputChangeHandler} type="text" placeholder="Price" className="input input-bordered w-full " />
       </div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Rating</span>
        </label>
        <input name='rating'   id='rating'   onChange={inputChangeHandler} type="text" placeholder="Rating" className="input input-bordered w-full " />
       </div>
       <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Quantity</span>
        </label>
        <input type="text"   onChange={inputChangeHandler} name='quantity' id='quantity' placeholder="Quantity" className="input input-bordered w-full " />
       </div>
       <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea  onChange={inputChangeHandler} name='description'   id='description' placeholder="Description" className="textarea textarea-bordered textarea-lg w-full " ></textarea></div>
      
      <div className='flex justify-center mt-4'>
      <button className="btn btn-primary gap-2" disabled={progresssending}>
        {progresssending && <div class="w-4 h-4 rounded-full animate-spin
                    border-2 border-solid border-white border-t-transparent"></div> }
      
                    <span>Add Toy</span>
        </button>
       </div>
      </form>}
 
          </section>
            
        </>
    );
}

export default AddAToyPage;
