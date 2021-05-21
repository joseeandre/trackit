import { Link } from "react-router-dom";
export default function Historico(props) {
  const { image } = props;

  return (
    <>
      <div className="content">
        <div className="header">
          <div className="title">TrackIt</div>
          <img src={image} alt="perfil" />
        </div>
        <div className="page-title">Histórico</div>
        <div className="no-habit">
          Em breve você poderá ver o histórico <br /> dos seus hábitos aqui!
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
