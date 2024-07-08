const PizzaItem = ({ menuData }) => {
  console.log(menuData);
  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <ul>
        <li>
          <img
            src={menuData.imageUrl}
            alt={menuData.name}
            className="rounded-lg"
          />
        </li>
        <li className="mt-2 font-bold text-lg">{menuData.name}</li>
        <li className="mt-1 text-gray-700">
          {menuData.ingredients.join(", ")}
        </li>
        <li className="mt-1 text-gray-900 font-semibold">
          Rs. {menuData.unitPrice}
        </li>
      </ul>
    </div>
  );
};

export default PizzaItem;
