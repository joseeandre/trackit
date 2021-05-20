import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Cadastro from "./components/Login/Cadastro";
import Hoje from "./components/Content/Hoje";

function App() {
  const [token, setToken] = useState("");
  const [image, setImage] = useState("");
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login setToken={setToken} setImage={setImage} />
          </Route>
          <Route path="/cadastro" exact>
            <Cadastro />
          </Route>
          <Route path="/hoje" exact>
            <Hoje token={token} image={image} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
