const ErrorMsg = () => {
  let foods = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

  return <>{foods.length === 0 ? <p>No food items available</p> : null};</>;
};

export default ErrorMsg;
