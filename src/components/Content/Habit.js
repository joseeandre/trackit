import axios from "axios";
export default function Habit(props) {
  const { id, name, days, token, setRender } = props;
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function isSelected(selectedId) {
    const novoArray = days.filter((option) => option === selectedId);
    return novoArray.length > 0;
  }

  function deleteHabit(selectedId) {
    const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${selectedId}`;
    const request = axios.delete(url, config);

    request.then((response) => {
      setRender([id]);
    });

    request.catch((error) => {
      alert("Erro ao excluir hábito");
    });
  }

  return (
    <div className="my-habit">
      <div className="my-habit-name">{name}</div>
      <span class="lnr lnr-trash" onClick={() => deleteHabit(id)}></span>
      <div className="days">
        {week.map((day, index) => (
          <div className={isSelected(index) ? "day selected-day" : "day"}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
