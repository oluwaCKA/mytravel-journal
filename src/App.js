import React from "react";
import Navbar from './Components/Navbar';
import Card from "./Components/Card";
import data from "./data";
import './App.css';

function App() {
  const cards = data.map(item => {
    return (
      <Card 
      key={item.id}
      {...item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <section className="card-list">
          {cards}
      </section>      
    </div>
    
  );
}

export default App;
