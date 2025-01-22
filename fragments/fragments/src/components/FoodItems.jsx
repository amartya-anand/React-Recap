const FoodItems = () => {
  let foods = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

  return (
    <ul className="food-items">
      {foods.map((item) => (
        <li key={item} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FoodItems;
