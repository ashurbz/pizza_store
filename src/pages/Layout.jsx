import { Outlet } from "react-router-dom";
import CartOverview from "../components/CartOverview";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <div>
        <Outlet />
      </div>
      <div>
        <CartOverview />
      </div>
    </>
  );
};

export default Layout;
