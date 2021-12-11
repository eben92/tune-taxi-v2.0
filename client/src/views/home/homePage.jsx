import { useState, useEffect } from "react";
import spotifyWebApi from "spotify-web-api-node";
import useAuth from "../../useAuth";
import { BiSearch } from "react-icons/bi";
import NavIcons from "../../components/icons/navIcons";
import HomePageCard from "../../components/cards/homePageCards/HomePageCard";
import Search from "../../routes/search/Search";
import { Form } from "react-bootstrap";
import TrackList from "./TrackList";
import "../../components/cards/homePageCards/homepagecard.css";
const spotifyApi = new spotifyWebApi({
  clientId: process.env.clientId,
});

const HomePage = ({ code }) => {
  const accessToken = useAuth(code);
  // console.log(accessToken);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  console.log(searchResult);
  useEffect(() => {
    if (accessToken) {
      spotifyApi.setAccessToken(accessToken);
    } else {
      console.log("no sccess token");
      return;
    }
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResult([]);
    if (!accessToken) return;
    // if (search && accessToken) {
    // console.log("it has");

    // we need to cancel the request anytime the search result changes
    let cancel = false;
    spotifyApi
      .searchTracks(search)
      .then((res) => {
        // console.log("data");
        // console.log(res.body.tracks.items);
        if (!cancel) return;
        // mapping
        setSearchResult(
          res.body.tracks.items.map((track) => {
            // gettting the smallest album/image

            const smallestAlbumImage = track.album.images.reduce(
              (smallest, image) => {
                if (image.height < smallest.height) return image;
                return smallest;
              },
              track.album.images[0]
            );

            return {
              artist: track.artists[0].name,
              title: track.name,
              uri: track.uri,
              albumUrl: smallestAlbumImage.url,
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
        console.log("Error");
      });

    return () => (cancel = true);
    // } else {
    // console.log("no search or access token");
    // setSearchResult([]);
    // return;
    // }

    // this means make reques and if a new request is made, we set the cancel to true
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
      <div className='home_Page_Card_Container flex justify-center items-center flex-col'>
        <HomePageCard />
        <div className='tracklist_overflow'>
          {searchResult.map((track) => (
            <TrackList key={track.uri} songs={track} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
