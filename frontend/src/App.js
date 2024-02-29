import './App.css';
import { Route, Routes } from "react-router";
import { useState, useEffect } from "react";
import { getTickets } from "./services/tickets.js";
import CreateTicket from './screens/CreateTicket/CreateTicket.jsx';
import AdminPanel from './screens/AdminPanel/AdminPanel.jsx';


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
    <>
    <Routes>
      <Route
          exact path="/adminPanel"
          element={<AdminPanel tickets={tickets} setTickets={setTickets}/>}
      />
      <Route
        path="/"
        element={<CreateTicket/>}
      />
    </Routes>
  </>
  );
}

export default App;
