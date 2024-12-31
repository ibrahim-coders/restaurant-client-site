import useMenu from '../hooks/useMenu';
import MenuItem from '../pages/Home/MenuItem';

const SectionTitle = () => {
  const [menu] = useMenu();
  const populer = menu.filter(item => item.category === 'popular');
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch('menu.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       const popularItems = data.filter(item => item.category === 'popular');
  //       setMenu(popularItems);
  //     })
  //     .catch(error => console.error('Error fetching menu:', error));
  // }, []);
  return (
    <div>
      <p className="text-center text-xl text-yellow-600 pb-4">Should Try</p>
      <h2 className="text-center text-2xl text-gray-800 font-bold">
        CHEF RECOMMENDS
      </h2>
      <div className="grid md:grid-cols-2 gap-10 my-10 px-10">
        {populer.map(item => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default SectionTitle;
