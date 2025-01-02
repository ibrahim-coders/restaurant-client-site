import { FaTrash } from 'react-icons/fa';
import useCart from '../../hooks/useCart';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const handleFoodDelete = id => {
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then(res => {
          if (res.data.deleteCount > 0) {
            refetch();
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
          }
          console.log(res);
        });
      }
    });
  };
  return (
    <div className="text-lg sm:text-2xl lg:text-4xl">
      <h1 className="text-center my-4 font-bold">Cart Items: {cart.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* Table Head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Food Image</th>
              <th>Food Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((food, index) => (
              <tr key={food._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={food.image} alt={food.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{food.name}</div>
                </td>
                <td>${food.price.toFixed(2)}</td>
                <td>
                  <button>
                    <FaTrash
                      onClick={() => handleFoodDelete(food._id)}
                      className="hover:text-red-950   text-red-700"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className="text-right font-bold">
                Total Price:
              </td>
              <td colSpan="2" className="font-bold">
                $
                {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Cart;
