import * as React from "react";

function getTitle(title) {
  return title;
}

const age = 26;

const produce = ["Apples", "Bananas", "Oranges"];

function App() {
  return (
    <div>
      <h1>Hello {getTitle('React')} I am {age} years old.</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <p htmlFor="fruit">Fruit: </p>
      {produce.map(produce => <li key={produce}>{produce}</li>)}
    </div>
  );
}

export default App;