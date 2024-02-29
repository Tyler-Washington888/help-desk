import React from 'react'
import './AdminPanel.css'
import Ticket from '../../components/Ticket/Ticket.jsx';
import { NavLink } from "react-router-dom";

export default function AdminPanel({tickets, setTickets}) {
  return (
    <div>
        <button>
            <NavLink to='/'>Home</NavLink>
        </button>
        <div >
            {tickets && tickets.length  ? (
                tickets.map((ticket, index) => {
                    return (
                        <Ticket tickets={tickets} setTickets={setTickets} index={index} />
                    );
                })
            ) : (
                <div>No Tickets have been created</div>
            )}
        </div>
    </div>
  )
}