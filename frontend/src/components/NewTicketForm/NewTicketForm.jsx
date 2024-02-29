import React from 'react'
import './NewTicketForm.css';
import { useState } from "react";
import { createTicket } from "../../services/tickets"

export default function NewTicketForm() {
    const [formData, setFormData] = useState({
        name: "",
        description: ""
      });
      const { name, description} = formData;
    
      const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));

      };

      const handleCreateTicket= async () => {

        console.log('would send email here')

        await createTicket(formData);

        setFormData(() => ({
            name: "",
            description: ""
        }))
      };

      return (
        <form
            className='new-ticket-form'
            onSubmit={(e) => {
            e.preventDefault();
            handleCreateTicket();
            }}
         >
            <div className="new-ticket-content-ctn">
                <div className='new-ticket-content-div'>
                    <div className='form-names'>Name</div>
                    <input className='form-input' type="text" name="name" value={name} onChange={handleChange}/>
                </div>
                <div className='new-ticket-content-div'>
                    <div className='form-names'>Description</div>
                    <input className='form-input' type="text" name="description" value={description} onChange={handleChange}/>
                </div>
            </div>
            <button className='new-ticket-btn'> Submit</button>
        </form>
    )
}