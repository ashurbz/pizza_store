import { Outlet } from "react-router-dom";
import CartOverview from "../components/CartOverview";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="bg-slate-200 min-h-screen">
      <header>
        <Header />
      </header>
      <div>
        <Outlet />
      </div>
      <div>
        <CartOverview />
      </div>
    </div>
  );
};

export default Layout;
