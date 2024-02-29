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
            onSubmit={(e) => {
            e.preventDefault();
            handleCUpdateTicket();
            }}
         >
            <div>
                <label>
                    <div>Update Status</div>
                    <select name="status" value={status} onChange={handleChange}>
                        <option value="new">New</option>
                        <option value="in progress">In Progress</option>
                        <option value="resolved">Resolved</option>
                    </select>
                </label>
                <label>
                    <div>Response</div>
                    <input type="text" name="response" value={response} onChange={handleChange}/>
                </label>
            </div>
            <button>
                Submit
            </button>
        </form>
    )
}