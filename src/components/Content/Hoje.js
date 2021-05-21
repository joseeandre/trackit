import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import Today from "./Today";
export default function Hoje(props) {
  const { token, image } = props;
  const [habits, setHabits] = useState([]);
  const [render, setRender] = useState([1]);
  let percentage = 0;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const now = dayjs().format("dddd, DD/MM");

  const doneHabits = habits.filter((habit) => habit.done === true);
  if (habits.length > 0) {
    percentage = 100 * (doneHabits.length / habits.length);
  }

  useEffect(() => {
    const request = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );

    request.then((response) => {
      setHabits([...response.data]);
    });
  }, render);
  return (
    <>
      <div className="content">
        <div className="header">
          <div className="title">TrackIt</div>
          <img src={image} alt="perfil" />
        </div>
        <div className="page-title">{now}</div>
        <div className={percentage === 0 ? "subtitle" : "subtitle green"}>
          {percentage === 0
            ? "Nenhum Hábito concluído ainda"
            : `${percentage.toFixed()}% dos hábitos concluídos`}
        </div>
        {habits.map((habit) => (
          <Today
            name={habit.name}
            id={habit.id}
            done={habit.done}
            currentSequence={habit.currentSequence}
            highestSequence={habit.highestSequence}
            token={token}
            setRender={setRender}
            render={render}
          />
        ))}
        <div className="footer">
          <Link to="/habitos">Hábitos</Link>
          <Link to="/historico">Histórico</Link>
        </div>
        <div className="today">Hoje</div>
      </div>
    </>
  );
}
