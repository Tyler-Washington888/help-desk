import React from 'react'
import './Ticket.css'
import { useState, useEffect } from "react";
import { getTicketResponses } from "../../services/tickets.js";
import TicketResponse from '../TicketResponse/TicketResponse.jsx';
import UpdateTicketForm from '../UpdateTicketForm/UpdateTicketForm.jsx';

export default function Ticket({index, tickets, setTickets }) {
    const [ticketResponses, setTicketResponses] = useState(null);
    const [responseFormOpen, setResponseFormOpen] = useState(false);

    useEffect(() => {
      const fetchTicketResponses  = async () => {
  
        let fetchedticketResponses = await getTicketResponses(tickets[index]?.id);
  
        if (fetchedticketResponses) {
            setTicketResponses(fetchedticketResponses);
        }
      };
  
      fetchTicketResponses();
    }, [ticketResponses, tickets, index ]);

    function toggleReponseForm() {
        setResponseFormOpen(!responseFormOpen)
    }
  
    return (
        <div>
            <div >
                <div >
                    <div>{tickets[index]?.name}</div>
                    <div>{tickets[index]?.status}</div>
                </div>
                <div >{tickets[index]?.description}</div>
                <button  onClick={toggleReponseForm}>Respond</button>
            </div>
            <div>
            {responseFormOpen ? <UpdateTicketForm index={index} setTickets={setTickets} tickets={tickets} responseFormOpen={responseFormOpen} setResponseFormOpen={setResponseFormOpen} /> : <div></div>}
            </div>
            <div>
                {ticketResponses && ticketResponses.length  ? (
                    ticketResponses.map((ticketResponse, index) => {
                        return (
                        <TicketResponse ticketResponse={ticketResponse} index={index}/>
                        );
                    })
                ) : (
                <div>No Responses</div>
                )}
            </div>
        </div>
    )
}