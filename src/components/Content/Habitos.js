import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Login/Loading";
import Habit from "./Habit";
export default function Habitos(props) {
  const { token, image } = props;
  const [habits, setHabits] = useState([]);
  const [habit, setHabit] = useState([]);
  const [isAddHabit, setIsAddHabits] = useState(false);
  const [days, setDays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [render, setRender] = useState([1]);
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    const request = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      config
    );

    request.then((response) => {
      setHabits([...response.data]);
    });
  }, render);

  function addHabit() {
    if (isAddHabit) {
      setIsAddHabits(false);
    } else {
      setDays([]);
      setIsAddHabits(true);
    }
  }

  function selectDay(id) {
    if (isSelected(id)) {
      const novoArray = days.filter((option) => option != id);
      setDays(novoArray);
    } else {
      setDays([...days, id]);
    }
  }

  function isSelected(id) {
    const novoArray = days.filter((option) => option === id);
    return novoArray.length > 0;
  }

  function saveHabit() {
    if (habit === "") {
      alert("Digite um hábito");
      return;
    }

    if (days.length === 0) {
      alert("Selecione um dia");
      return;
    }

    setIsLoading(true);
    const body = { name: habit, days: days };
    const request = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      body,
      config
    );

    request.then((response) => {
      setIsLoading(false);
      if(render[0] != 2){
        setRender([2]);
      } else {
        setRender([1]);
      }
      setIsAddHabits(false);
    });

    request.catch((error) => {
      alert("Erro ao criar hábito");
      setIsLoading(false);
    });
  }

  function cancelHabit() {
    setDays([]);
    setIsAddHabits(false);
  }

  return (
    <>
      <div className="content">
        <div className="header">
          <div className="title">TrackIt</div>
          <img src={image} alt="perfil" />
        </div>
        <div className="page-title">
          <div>Meus hábitos</div>
          <span className="lnr lnr-plus-circle" onClick={addHabit}></span>
        </div>
        <div className={isAddHabit ? "add-habit" : "add-habit hidden"}>
          <input
            type="text"
            placeholder="nome do hábito"
            onChange={(e) => setHabit(e.target.value)}
          />
          <div className="days">
            {week.map((day, index) => (
              <div
                className={isSelected(index) ? "day selected-day" : "day"}
                id={index}
                onClick={() => selectDay(index)}
              >
                {day}
              </div>
            ))}
          </div>
          <div className="add-buttons">
            <div className="cancel" onClick={cancelHabit}>
              Cancelar
            </div>
            <div className="save" onClick={saveHabit}>
              {isLoading ? <Loading /> : "Salvar"}
            </div>
          </div>
        </div>
        {habits.map((habit) => (
          <Habit
            id={habit.id}
            name={habit.name}
            days={habit.days}
            token={token}
            setRender={setRender}
          />
        ))}
        <div className={habits.length > 0 ? "no-habit hidden" : "no-habit"}>
          Você não tem nenhum hábito <br /> cadastrado ainda. Adicione um hábito{" "}
          <br /> para começar a trackear.
        </div>
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
