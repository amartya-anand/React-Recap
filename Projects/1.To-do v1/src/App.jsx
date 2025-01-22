import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <center>To-do list</center>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              Success
            </button>
          </div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">Buy Milk</div>
          <div class="col-4">22/01/25 </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">Go to College </div>
          <div class="col-4">22/01/25 </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
