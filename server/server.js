const express = require("express");
const spotifyWeb = require("spotify-web-api-node");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = 8000;

app.listen(`${PORT}`, () => {
  console.log("listening on port: " + PORT);
});

// refresh 👇👇
app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  console.log("hi");

  const spotifyApi = new spotifyWeb({
    redirectUri: "http://localhost:3000/home",
    clientId: "209833dcd53c4ec390e7766380414431",
    clientSecret: "a1975bed6b7b46de85bab1e4188703b4",
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      console.log(data.body);
      console.log("the accessToken has been refreshed");

      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      });

      spotifyApi.setAccessToken(data.body["access_token"]);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

// login 👇👇
app.post("/login", (req, res) => {
  const code = req.body.code;

  const spotifyApi = new spotifyWeb({
    redirectUri: "http://localhost:3000/home",
    clientId: "209833dcd53c4ec390e7766380414431",
    clientSecret: "a1975bed6b7b46de85bab1e4188703b4",
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(400);
    });
});
