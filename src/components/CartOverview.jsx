import { Link } from "react-router-dom";

const CartOverview = () => {
  return (
    <div>
      <div>23 pizzas</div>
      <div className="mb-4">2300 Rs</div>
      <Link to="/cart">Go To Cart</Link>
    </div>
  );
};

export default CartOverview;
