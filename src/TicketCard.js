import React from 'react';

const TicketCard = ({ ticket }) => {
  const priorityLabels = ["No priority", "Low", "Medium", "High", "Urgent"];
  
  return (
    <div className="ticket-card">
      <h4>{ticket.title}</h4>
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><strong>User:</strong> {ticket.user}</p>
      <p><strong>Priority:</strong> {priorityLabels[ticket.priority]}</p>
      
      {/* <style jsx>{`
        .ticket-card {
          background: white;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ddd;
        }
        h4 {
          margin: 0 0 5px 0;
        }
      `}</style> */}
    </div>
  );
};

export default TicketCard;
