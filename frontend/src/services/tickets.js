import api from "./apiConfig";

export const getTickets = async () => {
  try {
    const response = await api.get("/tickets");

    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getTicketResponses = async (id) => {
    try {
      const responses = await api.get(`/tickets/${id}`);
      return responses.data;
    } catch (error) {
      throw error;
    }
};


export const createTicket = async (newTicket) => {
    try {
          const response = await api.post("/tickets", newTicket);
          return response.data;
    } catch (error) {
      if (error.response) {
  
          return error.response.data;
  
      } else if (error.request) {
  
          return error.request.data;
  
      } else {
  
          return error.message
      }
    }
  };
  

  export const updateTicket  = async (id, ticketResponse) => {
    try {
      console.log(id, ticketResponse)
      const response = await api.put(`/tickets/${id}`, ticketResponse);
      console.log(response)
      return response.data;
    } catch (error) {
      if (error.response) {
  
          return error.response.data;
  
      } else if (error.request) {
  
          return error.request.data;
      } else {
  
          return error.message
  
      }
    }
  };



