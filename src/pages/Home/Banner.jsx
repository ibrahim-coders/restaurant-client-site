import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Banner1 from '../../assets/home/01.jpg';
import Banner2 from '../../assets/home/02.jpg';
import Banner3 from '../../assets/home/03.png';
import Banner4 from '../../assets/home/04.jpg';
import Banner5 from '../../assets/home/05.png';
import Banner6 from '../../assets/home/06.png';

const Banner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={2000}
      showThumbs={false}
      showStatus={false}
      showIndicators
      dynamicHeight
      emulateTouch
    >
      <div>
        <img src={Banner1} alt="Banner 1" />
      </div>
      <div>
        <img src={Banner2} alt="Banner 2" />
      </div>
      <div>
        <img src={Banner3} alt="Banner 3" />
      </div>
      <div>
        <img src={Banner4} alt="Banner 4" />
      </div>
      <div>
        <img src={Banner5} alt="Banner 5" />
      </div>
      <div>
        <img src={Banner6} alt="Banner 6" />
      </div>
    </Carousel>
  );
};

export default Banner;
