import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "Components";
import ClientContext from "./contexts/";
import axios from "axios";
import { LoadingPlaceholder } from "Components";
import { Paper } from "@material-ui/core";
import StyledRoot from "./style";

function App() {
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [client, setClient] = useState(null);

  const buildClient = async () => {
    const authData = await axios.get(`/authenticate`);
    const token = authData.data.access_token;
    const client = axios.create({
      baseURL: "/api/",
      timeout: 1000,
      headers: { Authorization: `Bearer ${token}` },
    });

    setClient({ client: client });
    setLoadingAuth(false);
  };

  useEffect(() => {
    buildClient();
  }, []);

  return loadingAuth ? (
    <LoadingPlaceholder />
  ) : (
    <ClientContext.Provider value={client.client}>
      <StyledRoot>
        <div className="App">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </StyledRoot>
    </ClientContext.Provider>
  );
}

export default App;
