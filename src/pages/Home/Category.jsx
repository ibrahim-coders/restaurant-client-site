import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../../App.css';
import { Pagination } from 'swiper/modules';
import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';
import slide5 from '../../assets/home/slide5.jpg';

const Category = () => {
  return (
    <div className="my-12">
      <div className="">
        <h3 className="text-center text-xl py-2 text-yellow-600">
          ---From 11:00am to 10:00pm---
        </h3>
        <h2 className="text-center text-2xl text-gray-800 font-bold pb-8">
          ORDER ONLINE
        </h2>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" className=" relative" />
          <h3 className="text-white text-4xl uppercase  absolute left-4 bottom-5">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img src={slide2} alt="" className=" relative" />
          <h3 className="text-white text-4xl uppercase  absolute left-4 bottom-5">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" className=" relative" />
          <h3 className="text-white text-4xl uppercase  absolute left-4 bottom-5">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img src={slide4} alt="" className=" relative" />
          <h3 className="text-white text-4xl uppercase  absolute left-4 bottom-5">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img src={slide5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
