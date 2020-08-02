import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "Components";
import ClientContext from "./contexts/";
import axios from "axios";
import { LoadingPlaceholder } from "Components";
import { Paper } from "@material-ui/core";
// import

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

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      {loadingAuth ? (
        <LoadingPlaceholder />
      ) : (
        <ClientContext.Provider value={client.client}>
          <div className="App">
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </ClientContext.Provider>
      )}
    </div>
  );
}

export default App;
