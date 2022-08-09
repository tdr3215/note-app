import "../css/Card.css";
function Card(props) {
  return (
    <div className="card mt-5">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.body}</p>
      </div>

      <button className="btn btn-info">Edit</button>

      <button className="btn btn-danger">Delete</button>
    </div>
  );
}

export default Card;
