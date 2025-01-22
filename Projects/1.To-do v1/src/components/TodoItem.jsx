function TodoItem() {
  let todoName = "Buy Milk";
  let todoDate = "22/01/25";
  return (
    <div className="container">
      <div className="row to-do">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate} </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger to-do button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
