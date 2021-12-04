const express = require("express");
const spotifyWeb = require("spotify-web-api-node");

const app = express();
// const PORT = 8000;

// app.listen(`${PORT}`, () => {
//   console.log("listening on port: " + PORT);
// });

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.post("/login", (req, res) => {
  const code = req.body.code;

  const spotifyApi = new spotifyWeb({
    redirectUri: "http://localhost:3000",
    clientId: "209833dcd53c4ec390e7766380414431",
    clientSecret: "58225232336e49efbd922a36adf514cb",
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
    .catch(() => {
      res.sendStatus(400);
    });
});
