import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../apiRestaurant";
import PizzaItem from "../components/PizzaItem";

const Menu = () => {
  const pizzaMenu = useLoaderData();
  console.log(pizzaMenu);

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-evenly max-w-screen-lg">
        {pizzaMenu.map((pizza) => (
          <div key={pizza.id} className="p-2 w-full sm:w-1/2 lg:w-1/4">
            <PizzaItem menuData={pizza} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const loader = async () => {
  return await getMenu();
};

export default Menu;
