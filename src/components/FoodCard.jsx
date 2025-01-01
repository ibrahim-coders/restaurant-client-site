import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useCart from '../hooks/useCart';

const FoodCard = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [, refetch] = useCart();
  const { name, image, price, recipe, _id } = item;

  const handleAddToCard = () => {
    if (user && user.email) {
      const cartItem = { menuId: _id, email: user.email, name, image, price };
      axiosSecure
        .post('/cards', cartItem)
        .then(res => {
          console.log(res.data);
          toast.success('Added to your cart successfully!');
          refetch();
        })
        .catch(err => {
          console.error(err);
          toast.error('Failed to add to cart.');
        });
      //refetch cart to update the cart items
    } else {
      Swal.fire({
        title: 'You are not logged in',
        text: 'Please log in to add items to your cart.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, log in',
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="relative">
        <img src={image} alt={`${name} image`} className="" />
        <p className="absolute top-4 right-8 bg-slate-700 text-white py-1 px-3 rounded-md shadow-lg">
          ${price}
        </p>
      </figure>
      <div className="card-body p-4 sm:p-6">
        <h2 className="card-title text-lg sm:text-xl font-bold">{name}</h2>
        <p className="text-sm sm:text-base text-gray-600">{recipe}</p>
        <div className="card-actions justify-start mt-4">
          <button
            onClick={handleAddToCard}
            className="btn btn-primary 
               opacity-50  hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
