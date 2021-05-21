import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import Today from "./Today";
export default function Historico(props) {
  const { token, image } = props;
  const [habits, setHabits] = useState([]);
  const [render, setRender] = useState([1]);
  let percentage = 0;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return (
    <>
      <div className="content">
        <div className="header">
          <div className="title">TrackIt</div>
          <img src={image} alt="perfil" />
        </div>
        <div className="page-title">Histórico</div>
        <div className="no-habit">Em breve você poderá ver o histórico <br/> dos seus hábitos aqui!</div>
        <div className="footer">
          <Link to="/habitos">Hábitos</Link>
          <Link to="/historico">Histórico</Link>
        </div>
        <Link to="/hoje" className="today">
          Hoje
        </Link>
      </div>
    </>
  );
}