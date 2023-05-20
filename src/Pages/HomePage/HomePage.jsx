import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import Header from '../../Layout/Header/Header';
import Gallery from '../../Component/Gallery/Gallery';
import ShopByCategory from '../../Component/ShopByCategory/ShopByCategory';
const HomePage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {

    }


  }, []);

  return (


    <> 


{/* gallery section */}
<Gallery/>
<ShopByCategory/>

    </>


  );
}

export default HomePage;
