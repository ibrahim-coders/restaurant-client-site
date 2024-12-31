// Import necessary modules and styles
import Title from '../../components/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Updated import for Navigation
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  // Fetch reviews data on component mount
  useEffect(() => {
    fetch('http://localhost:5000/review')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <section className="my-20">
      {/* Title component */}
      <Title subHeading="---What Our Clients Say---" heading="TESTIMONIALS" />

      {/* Swiper component */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map(review => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16">
              {/* Display rating */}
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              {/* Display review details */}
              <p className="py-8">{review.details}</p>
              {/* Display reviewer name */}
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
