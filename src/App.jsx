import React, { useState } from "react";
import List from "./Components/List";
import data from "./DummyData/data";
import './Styles/app.css'
function App() {
  const [people, setPeople] = useState(data);

  
  return (
    <main>
      <section className="box">

        <h1>{people.length} birthday today</h1>
        <List people={people} />
        <button onClick={()=>setPeople([])}>clear all</button>
     
      </section>
    </main>
  );
}

export default App;
