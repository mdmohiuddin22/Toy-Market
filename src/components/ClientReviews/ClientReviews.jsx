
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'



const ClientReviews = () => {
  const [reviews, setReviews]=useState([]);

  useEffect(()=>{
    fetch('reviews.json')
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])
  return (
    <section className='my-20'>
      <h1 className='text-center text-5xl font-bold'>Client Reviews
      </h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
        
        {
          reviews.map(review =>  <SwiperSlide
          key={review._id}
        
          >
<div className='flex flex-col items-center mx-24 my-16'>
<Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />

    <img className='rounded-full h-44 w-44' src={review.image}  />
  <p className='py-8'>{review.details}</p>
  <h3 className='text-2xl text-orange-400'>{review.name}</h3>
</div>
          </SwiperSlide>)
        }
      </Swiper>
    </section>
  );
};

export default ClientReviews;