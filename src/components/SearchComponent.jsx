import { useState } from "react";

const SearchComponent = () => {
  const [query, setQuery] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
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