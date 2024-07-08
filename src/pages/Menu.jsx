import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../apiRestaurant";

const Menu = () => {
  const pizzaMenu = useLoaderData();

  return (
    <div>
      {pizzaMenu.map((pizza, index) => {
        return <h2 key={index}> {pizza.name}</h2>;
      })}
    </div>
  );
};

export const loader = async () => {
  return await getMenu();
};

export default Menu;
