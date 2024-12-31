import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../components/SectionTitle';
import Banner from './Banner';
import Category from './Category';
import Featured from './Featured';
import Testmonials from './Testmonials';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BISTRO | HOME</title>
      </Helmet>
      <Banner />
      <Category />
      <SectionTitle />
      <Featured />
      <Testmonials />
    </div>
  );
};

export default Home;
