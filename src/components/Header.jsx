import SearchComponent from "./SearchComponent";

const Header = () => {
  return (
    <div className="flex justify-around  shadow-md p-2">
      <div className="text-2xl">The Fast Pizza Co.</div>
      <div className="bg-slate-200">
        <SearchComponent />
      </div>
      <div className="mt-1">Ashish</div>
    </div>
  );
};

export default Header;
