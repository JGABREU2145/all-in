import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/home";
import ClientContext from "./contexts/";
import axios from "axios";

function App() {
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
  };

  useEffect(() => {
    buildClient();
  }, []);
  return (
    client &&
    client.client && (
      <ClientContext.Provider value={client.client}>
        <div className="App">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </ClientContext.Provider>
    )
  );
}

export default App;
