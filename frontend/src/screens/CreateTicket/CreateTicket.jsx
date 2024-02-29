import React from 'react'
import './CreateTicket.css';
import NewTicketForm from '../../components/NewTicketForm/NewTicketForm.jsx';
import { NavLink } from "react-router-dom";

export default function CreateTicket() {

    return (
        <div className='create-ticket-ctn '>
            <button className='admin-panel-ctn'>
                <NavLink className="admin-panel-btn" to='/adminPanel'><h1>Admin Panel</h1></NavLink>
            </button>
            <div className='new-ticket-ctn'>
                <h1>Submit Request</h1>
                <NewTicketForm></NewTicketForm>
            </div>
        </div>
    )
}