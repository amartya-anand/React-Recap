import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/foodItems";
import ErrorMsg from "./components/ErrorMsg";

function App() {
  //   let foods = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];
  //   let foods = [];
  return (
    <>
      <h1>Healthy foods</h1>
      <ErrorMsg />
      <FoodItems />
    </>
  );
}

export default App;
