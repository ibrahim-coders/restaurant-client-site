const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="relative">
        <img src={image} alt={name} className="" />
        <p className="absolute top-4 right-8 bg-slate-700 text-white py-1 px-3 rounded-md shadow-lg">
          ${price}
        </p>
      </figure>
      <div className="card-body p-4 sm:p-6">
        <h2 className="card-title text-lg sm:text-xl font-bold">{name}</h2>
        <p className="text-sm sm:text-base text-gray-600">{recipe}</p>
        <div className="card-actions justify-start mt-4">
          <button className="btn btn-primary hover:bg-blue-600 transition-all">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
