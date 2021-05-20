import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { isEmail, isURL } from 'validator';
import axios from "axios";
import Loading from "./Loading";
export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const { setToken, setImage } = props;

  function sendLogin() {
    if(!isEmail(email)) {
      alert("Insira um email válido");
      return;
    }

    if(password === "") {
      alert("Insira sua senha");
      return;
    }

    setIsLoading(true);
    const body = {password, email};
    const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);

    request.then(response => {
      setIsLoading(false);
      setToken(response.data.token);
      setImage(response.data.image);
      history.push("/hoje");
    })

    request.catch(error => {
      alert("Email ou senha incorretos");
      setIsLoading(false);
    })
  }

  return (
    <>
      <div className="logo">
        <img src="pictures/logo.svg" alt="logo" />
      </div>
      <div className="login">
        <input type="text" placeholder="email" onChange={e => setEmail(e.target.value)} />
        <input type="text" placeholder="senha" onChange={e => setPassword(e.target.value)} />
        <div className="send-login" onClick={sendLogin}>{isLoading ? <Loading />:"Entrar"}</div>
        <Link to="/cadastro" className="create-account">Não tem uma conta? Cadastre-se</Link>
      </div>
    </>
  );
}
