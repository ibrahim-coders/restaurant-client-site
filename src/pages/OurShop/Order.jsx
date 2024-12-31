import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderCover from '../../assets/shop/banner2.jpg';
import Cover from '../Menu/Cover';
import { useState } from 'react';
import useMenu from '../../hooks/useMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Bistro | Order Food</title>
      </Helmet>
      <Cover menuCover={orderCover} menuTitle="Order Food"></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList className="flex justify-center space-x-4 my-10">
          <Tab>
            <p
              className={({ selected }) =>
                `cursor-pointer text-xl ${
                  selected ? 'text-orange-600 font-bold' : 'text-gray-500'
                }`
              }
            >
              Salad
            </p>
          </Tab>

          <Tab>
            <h3
              className={({ selected }) =>
                `cursor-pointer text-xl my-2${
                  selected ? 'text-orange-600 font-bold' : 'text-gray-500'
                }`
              }
            >
              Soups
            </h3>
          </Tab>
          <Tab>
            <h3
              className={({ selected }) =>
                `cursor-pointer text-xl my-2${
                  selected ? 'text-orange-600 font-bold' : 'text-gray-500'
                }`
              }
            >
              Desserts
            </h3>
          </Tab>
          <Tab>
            <h3
              className={({ selected }) =>
                `cursor-pointer text-xl my-2${
                  selected ? 'text-orange-600 font-bold' : 'text-gray-500'
                }`
              }
            >
              Drinks
            </h3>
          </Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={offered}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
