import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../components/CartOverview";
import Header from "../components/Header";

const Layout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const loading = navigation.state === "loading";
  return (
    <div className="bg-slate-200 min-h-screen">
      {loading && <h1>loader</h1>}
      <header>
        <Header />
      </header>
      <div className="mb-4">
        <Outlet />
      </div>
      <div>
        <CartOverview />
      </div>
    </div>
  );
};

export default Layout;
