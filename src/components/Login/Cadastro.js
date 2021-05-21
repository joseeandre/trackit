import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { isEmail, isURL } from 'validator';
import axios from "axios";
import Loading from "./Loading";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [visibilePass, setVisiblePass] = useState(false);
  const history = useHistory();

  function sendRegister() {
    if(!isEmail(email)) {
      alert("Insira um email válido");
      return;
    }

    if(password === "") {
      alert("Insira uma senha");
      return;
    }

    if(name === "") {
      alert("Insira seu nome");
      return;
    }

    if(!isURL(image)) {
      alert("Insira uma imagem válida");
      return;
    }

    setIsLoading(true);
    const body = {name, password, image, email};
    const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body);

    request.then(response => {
      setIsLoading(false);
      history.push("/");
    })

    request.catch(error => {
      alert("Erro ao criar conta");
      setIsLoading(false);
    })
  }

  function seePassword() {
    if(visibilePass){
      setVisiblePass(false);
    } else {
      setVisiblePass(true);
    }
  }

  return (
    <>
      <div className="logo">
        <img src="pictures/logo.svg" alt="logo" />
      </div>
      <div className="register">
        <input type="text" placeholder="email" onChange={e => setEmail(e.target.value)} />
        <input type={visibilePass ? "text":"password"} placeholder="senha" onChange={e => setPassword(e.target.value)} />
        <span onClick={seePassword} className="lnr lnr-eye"></span>
        <input type="text" placeholder="nome" onChange={e => setName(e.target.value)} />
        <input type="text" placeholder="foto" onChange={e => setImage(e.target.value)} />
        <div className="send-register" onClick={sendRegister}>{isLoading ? <Loading />:"Cadastrar"}</div>
        <Link to="/" className="create-account">Já tem uma conta? Faça login!</Link>
      </div>
    </>
  );
}