import { useForm } from 'react-hook-form';
import Title from '../../components/Title';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAxiosSecure from '../../hooks/useAxiosSecure';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const onSubmit = async data => {
    console.log(data);
    const fileImage = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, fileImage, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRespon = await axiosSecure.post('/menu', menuItem);
      console.log(menuRespon.data);
      if (menuRespon.data.insertedid) {
        //show success message
        alert('item added successfully');
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Title heading="Add an Item" subHeading="What's new?" />

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <label className="w-full block">
            <div className="label">
              <span className="label-text">Recipe Name</span>
            </div>
            <input
              {...register('name', { required: true })}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </label>

          <div className="md:flex md:gap-4">
            <div className="flex-1">
              <p className="py-2">Category</p>
              <select
                className="select select-info w-full"
                {...register('category', { required: true })}
                defaultValue=""
              >
                <option disabled value="">
                  Select Category
                </option>
                <option value="salad">Salata</option>
                <option value="pizza">Pizza</option>
                <option value="desserts">Desserts</option>
                <option value="drink">Drink</option>
                <option value="soup">Soup</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="w-full block">
                <div className="label">
                  <span className="label-text">Recipe Price</span>
                </div>
                <input
                  {...register('price', { required: true })}
                  type="number"
                  placeholder="Recipe price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* Add Description Field */}
          <label className="w-full block">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              {...register('recipe', { required: true })}
              placeholder="Write a description of the recipe"
              className="textarea textarea-bordered w-full"
              rows="4"
            />
          </label>
          <div>
            {' '}
            <input
              {...register('image', { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn">
            Add item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
