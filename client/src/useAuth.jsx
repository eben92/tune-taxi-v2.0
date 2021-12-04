import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = (code) => {
  const [acccessToken, setAccessToken] = useState();
  const [refreshToken, setrefreshToken] = useState();
  const [expiresIn, setexpiresIn] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:8000/login", {
        code,
      })
      .then((res) => {
        setAccessToken(res.data.acccessToken);

        // the refreshToken will help the user from logging in again every 1 hour
        setrefreshToken(res.data.refreshToken);
        setexpiresIn(res.data.expiresIn);

        console.log(res.data);

        // this will remove the code from the url and return the homepage url
        window.history.pushState({}, null, "/");
      })
      .catch((err) => {
        // this will redirect the user back to the login page if there was an error
        window.location = "/";
        console.log(err);
      });
  }, [code]);

  //  this useEffect -- whenever our refresh token or expiresIn changes
  // this should render
  useEffect(() => {
    if (!refreshToken || !expiresIn) return;

    const interval = setInterval(() => {
      axios
        .post("http://localhost:8000/refresh", {
          refreshToken,
        })
        .then((res) => {
          //  setrefreshToken(res.data.refreshToken);
          setexpiresIn(res.data.expiresIn);
          setAccessToken(res.data.acccessToken);
        })
        .catch((err) => {
          window.location = "/";
        });
    }, (expiresIn - 60) * 1000);

    // if theres a any error clear the timeout and return
    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  // this will allow us to call the spotify api (search for songs, play songs etc...)
  // but it will expire in 1 hour (meaning the user will have to login again) which sucks
  return acccessToken;
};

export default useAuth;