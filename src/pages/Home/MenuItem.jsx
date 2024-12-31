const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="flex space-x-2 ">
      <img
        style={{ borderRadius: '0 200px 200px 200px' }}
        src={image}
        alt=""
        className="w-[100px]"
      />
      <div className="flex">
        <div>
          {' '}
          <h3 className="uppercase">{name}--------------------------</h3>
          <p>{recipe}</p>
        </div>
        <div>
          <p className="text-yellow-600">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
