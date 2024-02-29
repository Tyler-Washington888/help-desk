import React from 'react'
import './TicketResponse.css'

export default function TicketResponse({ticketResponse}) {
  return (
    <div>
        <div>
            <div >Admin</div>
            <div>{ticketResponse.status}</div>
        </div>
        <div>{ticketResponse.response}</div>
    </div>
  )
}