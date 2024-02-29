import React from 'react'
import './TicketResponse.css'

export default function TicketResponse({ticketResponse}) {
  return (
    <div className='ticket-res-ctn'>
        <div className='ticket-res-admin-status'>
            <div className='ticket-res-name'>Admin</div>
            <div className='ticket-res-status'>{ticketResponse.status}</div>
        </div>
        <div className='ticket-res-response'>{ticketResponse.response}</div>
    </div>
  )
}