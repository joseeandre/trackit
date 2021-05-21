import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Cadastro from "./components/Login/Cadastro";
import Hoje from "./components/Content/Hoje";
import Habitos from "./components/Content/Habitos";
import Historico from "./components/Content/Historico";

function App() {
  const [token, setToken] = useState("");
  const [image, setImage] = useState("");
  return (
    <>
      <BrowserRouter basename="https://joseeandre.github.io/trackit">
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
          <Route path="/habitos" exact>
            <Habitos token={token} image={image} />
          </Route>
          <Route path="/historico" exact>
            <Historico token={token} image={image} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));