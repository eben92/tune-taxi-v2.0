import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Cards from "../../components/cards/cards";
import "./search.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className='search-page-container'>
      <h1 className='search-title text-gray-300'>Search</h1>
      <label className='search-Bar-container flex bg-gray-600 items-center rounded-lg p-1'>
        <BiSearch className='search-icon' />
        <input
          type='text'
          placeholder='Artists, Songs, Lyrics and More'
          value={searchValue}
          className='search-input text-gray-300'
          onChange={(e) => {
            setSearchValue(e.target.value);
            console.log(searchValue);
          }}
        />
      </label>
      <hr className=' border-gray-700 mb-4' />
      <div>
        <Cards />
      </div>
    </div>
  );
};

export default Search;
