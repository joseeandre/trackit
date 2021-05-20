export default function Hoje(props) {
  const { token, image } = props;
  return (
    <>
      <div className="content">
        <div className="header">
          <div className="title">TrackIt</div>
          <img src={image} alt="perfil" />
        </div>
        <div className="footer"></div>
        <div className="today">Hoje</div>
      </div>
    </>
  );
}
