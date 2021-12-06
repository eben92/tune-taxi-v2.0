import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import spotifyWebApi from "spotify-web-api-node";
import Cards from "../../components/cards/cards";
import "./search.css";
import useAuth from "../../useAuth";

const spotifyApi = new spotifyWebApi({
  clientId: "209833dcd53c4ec390e7766380414431",
});
const Search = ({ code }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const accessToken = useAuth(code);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!searchValue) return setSearchResult([]);
    if (!accessToken) return;

    spotifyApi.searchTracks(searchValue).then((res) => console.log(res));
  }, [searchValue, accessToken]);

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
      <div>{/* <Cards /> */}</div>
    </div>
  );
};

export default Search;
