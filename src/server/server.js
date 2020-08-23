const YAML = require("yaml");
const fs = require("fs");
const express = require("express");
const app = express();
const { ClientCredentials } = require("simple-oauth2");
const port = 3002;
var path = require("path");

const file = fs.readFileSync(
  path.resolve(__dirname, "../../config.yml"),
  "utf8"
);
const config = YAML.parse(file);

app.get("/authenticate", async (req, res) => {
  const oauthConfig = {
    client: {
      id: config.credentials.client_id,
      secret: config.credentials.client_secret,
    },
    auth: {
      tokenHost: config.credentials.token_host,
    },
  };
  const client = new ClientCredentials(oauthConfig);
  try {
    const accessToken = await client.getToken();
    res.send(accessToken);
  } catch (error) {
    console.log("Access Token error", error.message);
    res.status(500).send(error.message);
  }
});

app.listen(port, () =>
  console.log(`AllIn auth server is listening at http://localhost:${port}`)
);
