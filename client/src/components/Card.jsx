const Card = (props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{props.title}!</h2>
        <p>episodes: {props.episodes}</p>
      </div>
      <figure>
        <img src={props.image} alt="cartoon character" />
      </figure>
    </div>
  );
};

export default Card;
