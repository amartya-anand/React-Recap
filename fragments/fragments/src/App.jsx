import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foods = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];
  //   let foods = [];
  return (
    <>
      <h1>Healthy foods</h1>
      {foods.length === 0 ? <p>No food items available</p> : null}
      <ul className="food-items">
        {foods.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
