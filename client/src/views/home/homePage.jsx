import { useState, useEffect } from "react";
import spotifyWebApi from "spotify-web-api-node";
import useAuth from "../../useAuth";
import { BiSearch } from "react-icons/bi";
import NavIcons from "../../components/icons/navIcons";
import HomePageCard from "../../components/cards/homePageCards/HomePageCard";
import Search from "../../routes/search/Search";
import { Form } from "react-bootstrap";

const spotifyApi = new spotifyWebApi({
  clientId: process.env.clientId,
});

const HomePage = ({ code }) => {
  const accessToken = useAuth(code);
  console.log(accessToken);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (accessToken) {
      spotifyApi.setAccessToken(accessToken);
    } else {
      console.log("no sccess token");
      return;
    }
  }, [accessToken]);

  useEffect(() => {
    if (search && accessToken) {
      console.log("it has");
      spotifyApi
        .searchTracks(search)
        .then((res) => {
          console.log("data");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          console.log("Error");
        });
    } else {
      console.log("no search or access token");
      setSearchResult([]);
      return;
    }
  }, [search, accessToken]);

  return (
    <div>
      <div className='search-page-container'>
        <h1 className='search-title text-gray-300'>Search</h1>
        <div className='search-Bar-container flex bg-gray-600 items-center rounded-lg p-1'>
          <BiSearch className='search-icon' />
          <Form.Control
            type='search'
            placeholder='Artists, Songs, Lyrics and More'
            value={search}
            className='search-input text-gray-300'
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <hr className=' border-gray-700 mb-4' />
        <div>{/* <Cards /> */}</div>
      </div>

      <HomePageCard />
    </div>
  );
};

export default HomePage;
