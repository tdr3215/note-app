import Card from "./Card";
import "../css/Board.css";
function App() {
  return (
    <div className="Board">
      <div className="container">
        <div className="row">
          <div className="col-6-md">
            <Card title="Test Name" body="testing the body element" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
