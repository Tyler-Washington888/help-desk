import './App.css';
import { Route, Routes } from "react-router";
import { useState, useEffect } from "react";
import { getTickets } from "./services/tickets.js";


function App() {
  const [tickets, setTickets] = useState(null);

  useEffect(() => {
    const fetchTickets  = async () => {

      let tickets = await getTickets();

      if (tickets) {
        setTickets(tickets);
      }
    };

    fetchTickets();
  }, [tickets]);


  return (
    <div>
    </div>
  );
}

export default App;
