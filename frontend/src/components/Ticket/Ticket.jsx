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
        <div className='ticket-ctn'>
            <div className='ticket-content'>
                <div className='ticket-name-status-ctn'>
                    <div className='ticket-name'>{tickets[index]?.name}</div>
                    <div className='ticket-status'>{tickets[index]?.status}</div>
                </div>
                <div className='ticket-description' >{tickets[index]?.description}</div>
                <button className='update-ticket-btn' onClick={toggleReponseForm}>Respond</button>
            </div>
            <div className='update-ticket-ctn'>
                {responseFormOpen ? 
                    <UpdateTicketForm index={index} setTickets={setTickets} tickets={tickets} responseFormOpen={responseFormOpen} setResponseFormOpen={setResponseFormOpen} /> 
                    : 
                    <div></div>}
            </div>
            <div className='update-ticket-res-ctn'>
                {ticketResponses && ticketResponses.length  ? (
                    ticketResponses.map((ticketResponse, index) => {
                        return (
                        <TicketResponse ticketResponse={ticketResponse} index={index}/>
                        );
                    })
                ) : (
                <div className='no-responses'>No Responses</div>
                )}
            </div>
        </div>
    )
}