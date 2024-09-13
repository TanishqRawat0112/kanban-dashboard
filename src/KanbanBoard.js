import React from 'react';
import TicketCard from './TicketCard';

const KanbanBoard = ({ tickets, users, groupingOption, sortingOption }) => {

  const sortTickets = (tickets) => {
    return [...tickets].sort((a, b) => {
      if (sortingOption === 'priority') return b.priority - a.priority;
      if (sortingOption === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  };

  const groupTickets = (tickets,users) => {
    const grouped = tickets.reduce((acc, ticket) => {
      const groupKey = groupingOption === 'status' 
        ? ticket.status 
        : groupingOption === 'user' 
        ? users
        : `Priority ${ticket.priority}`;
      
      if (!acc[groupKey]) acc[groupKey] = [];
      acc[groupKey].push(ticket);
      return acc;
    }, {});

    return grouped;
  };

  const sortedTickets = sortTickets(tickets);
  const groupedTickets = groupTickets(sortedTickets);

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map(group => (
        <div key={group} className="kanban-column">
          <h3>{group}</h3>
          {groupedTickets[group].map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
      
      {/* <style jsx>{`
        .kanban-board {
          display: flex;
          justify-content: space-between;
        }
        .kanban-column {
          width: 30%;
          background: #f4f4f4;
          padding: 10px;
          margin: 5px;
        }
      `}</style> */}
    </div>
  );
};

export default KanbanBoard;
