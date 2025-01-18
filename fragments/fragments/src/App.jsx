import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foods = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];
  return (
    <>
      <h1>Healthy foods</h1>
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
