import axios from "axios";
export default function Today(props) {
  const {
    id,
    name,
    currentSequence,
    token,
    highestSequence,
    done,
    render,
    setRender,
  } = props;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function selectHabit(selectedId) {
    const urlCheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${selectedId}/check`;
    const urlUncheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${selectedId}/uncheck`;

    if(!done) {
        const requestCheck = axios.post(urlCheck, {}, config);

        requestCheck.then((response) => {
            if (render[0] != 2) {
              setRender([2]);
            } else {
              setRender([1]);
            }
          });

          requestCheck.catch((error) => {
            alert("Erro ao selecionar!");
          });
    } else {
        const requestUncheck = axios.post(urlUncheck, {}, config);

        requestUncheck.then((response) => {
            if (render[0] != 2) {
              setRender([2]);
            } else {
              setRender([1]);
            }
          });

          requestUncheck.catch((error) => {
            alert("Erro ao selecionar!");
          });
    }
  }

  return (
    <div className="today-habit">
      <div>
        <div className="today-habit-name">{name}</div>
        <div className="sequence">
          <div>Sequência atual: </div>
          <div className={currentSequence === highestSequence ? "green" : ""}>
            {currentSequence} dias
          </div>
        </div>
        <div className="sequence">
          <div>Seu recorde: </div>
          <div className={currentSequence === highestSequence ? "green" : ""}>
            {highestSequence} dias
          </div>
        </div>
      </div>
      <span
        className={
          done ? "lnr lnr-checkmark-circle green" : "lnr lnr-checkmark-circle"
        }
        onClick={() => selectHabit(id)}
      ></span>
    </div>
  );
}
