import React, { useState, useEffect } from 'react';
import KanbanBoard from './KanbanBoard.js';
import SortingAndGroupingControls from './SortingAndGroupingControls';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupingOption, setGroupingOption] = useState(localStorage.getItem('grouping') || 'status');
  const [sortingOption, setSortingOption] = useState(localStorage.getItem('sorting') || 'priority');

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data && data.tickets && data.users) {
        setTickets(data.tickets);
        console.log(data.users);
        setUsers({...data.users});

        

      } else {
        console.error('Unexpected data format:', data);
        // setError('Unexpected data format');
      }
    })
    .catch(err => {
      console.error('Fetch error:', err);
      // setError('Failed to fetch tickets');
    });
  }, []);
  console.log(users);

  const handleGroupingChange = (option) => {
    setGroupingOption(option);
    localStorage.setItem('grouping', option);
  };

  const handleSortingChange = (option) => {
    setSortingOption(option);
    localStorage.setItem('sorting', option);
  };

  return (
    <div className="app-container">
      <h1>Kanban Board</h1>
      <SortingAndGroupingControls 
        onGroupingChange={handleGroupingChange} 
        onSortingChange={handleSortingChange} 
        groupingOption={groupingOption}
        sortingOption={sortingOption}
      />
      <KanbanBoard tickets={tickets} users={users} groupingOption={groupingOption} sortingOption={sortingOption} />
    </div>
  );
};

export default App;

