import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate(`/order/${query}`);
  };
  const handleOnChange = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          className="p-3 w-80  bg-gray-300"
          type="search"
          placeholder="Search here..."
          value={query}
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
};

export default SearchComponent;
