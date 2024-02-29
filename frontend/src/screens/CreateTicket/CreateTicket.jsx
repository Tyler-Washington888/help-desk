import React from 'react'
import './CreateTicket.css';
import NewTicketForm from '../../components/NewTicketForm/NewTicketForm.jsx';
import { NavLink } from "react-router-dom";

export default function CreateTicket() {

    return (
        <div>
            <button>
                <NavLink to='/adminPanel'><h1>Admin Panel</h1></NavLink>
            </button>
            <div>
                <h1>Submit Request</h1>
                <NewTicketForm></NewTicketForm>
            </div>
        </div>
    )
}