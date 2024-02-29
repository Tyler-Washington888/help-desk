import React from 'react'
import './AdminPanel.css'
import Ticket from '../../components/Ticket/Ticket.jsx';
import { NavLink } from "react-router-dom";

export default function AdminPanel({tickets, setTickets}) {
  return (
    <div className='adminPanel-ctn'>
        <button className='home-btn'>
            <NavLink className="home-link" to='/'>Home</NavLink>
        </button>
        <div className="tickets-ctn">
            {tickets && tickets.length  ? (
                tickets.map((ticket, index) => {
                    return (
                        <Ticket tickets={tickets} setTickets={setTickets} index={index} />
                    );
                })
            ) : (
                <div className='no-tickets'>No Tickets have been created</div>
            )}
        </div>
    </div>
  )
}