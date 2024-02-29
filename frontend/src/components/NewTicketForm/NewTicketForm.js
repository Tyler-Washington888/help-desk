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
            onSubmit={(e) => {
            e.preventDefault();
            handleCreateTicket();
            }}
         >
            <div>
                <div>
                    <div>Name</div>
                    <input type="text" name="name" value={name} onChange={handleChange}/>
                </div>
                <div>
                    <div >Description</div>
                    <input  type="text" name="description" value={description} onChange={handleChange}/>
                </div>
            </div>
            <button>Submit</button>
        </form>
    )
}