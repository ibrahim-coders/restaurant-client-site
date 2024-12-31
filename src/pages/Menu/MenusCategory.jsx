import { Link } from 'react-router-dom';
import MenuItem from '../Home/MenuItem';
import Cover from './Cover';

const MenusCategory = ({ items, title, img }) => {
  console.log(title);
  return (
    <div className="pt-8">
      {title && <Cover menuCover={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-10 px-10">
        {items.map(item => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link
          to={`/order/${title}`}
          className="btn btn-outline border-0 border-b-4 my-4 "
        >
          ORDER NOW
        </Link>
      </div>
    </div>
  );
};

export default MenusCategory;
