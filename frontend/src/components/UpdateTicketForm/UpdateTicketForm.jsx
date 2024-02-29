import React from 'react'
import './UpdateTicketForm.css'
import { useState } from "react";
import { updateTicket } from "../../services/tickets"

export default function UpdateTicketForm({tickets, index}) {
    const [formData, setFormData] = useState({
        status:"in progress",
        response: ""
      });
      const { status, response} = formData;
    
      const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handleCUpdateTicket= async () => {

        await updateTicket(tickets[index].id, formData);

        tickets[index].status = status

        setFormData(() => ({
            status: "",
            response: ""
        })) 
      };
    
    return (
        <form
            className='update-ticket-form'
            onSubmit={(e) => {
            e.preventDefault();
            handleCUpdateTicket();
            }}
         >
            <div className='update-ticket-content-ctn'>
                <label className='update-ticket-content'>
                    <div className='update-ticket-properies'>Update Status</div>
                    <select className='update-ticket-select' name="status" value={status} onChange={handleChange}>
                        <option value="new">New</option>
                        <option value="in progress">In Progress</option>
                        <option value="resolved">Resolved</option>
                    </select>
                </label>
                <label className='update-ticket-content'>
                    <div className='update-ticket-properies'>Response</div>
                    <input  className='form-input' type="text" name="response" value={response} onChange={handleChange}/>
                </label>
            </div>
            <button className='new-ticket-btnn'>
                Submit
            </button>
        </form>
    )
}