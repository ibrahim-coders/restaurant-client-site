import { Helmet } from 'react-helmet-async';
import Cover from './Cover';
import menuCover from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImag from '../../assets/menu/pizza-bg.jpg';
import soupImag from '../../assets/menu/soup-bg.jpg';
import saladImag from '../../assets/menu/salad-bg.jpg';
import useMenu from '../../hooks/useMenu';
import Title from '../../components/Title';
import MenusCategory from './MenusCategory';

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');

  return (
    <div>
      <Helmet>
        <title>BISTRO | MENU</title>
      </Helmet>
      {/* Main Cover */}
      <Cover menuCover={menuCover} menuTitle="Our Menu" />
      {/* Offered Menu Items */}
      <Title subHeading="---Don't miss---" heading="TODAY'S OFFER"></Title>
      <MenusCategory items={offered} />
      {/* Dessert Menu Items */}
      <MenusCategory items={dessert} title={'dessert'} img={dessertImg} />
      {/* Pizza Menu Items */}
      <MenusCategory items={pizza} title={'pizza'} img={pizzaImag} />
      <MenusCategory items={soup} title={'soup'} img={soupImag} />
      <MenusCategory items={salad} title={'salad'} img={saladImag} />
    </div>
  );
};

export default Menu;
