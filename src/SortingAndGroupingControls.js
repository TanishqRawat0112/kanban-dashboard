import React from 'react';

const SortingAndGroupingControls = ({ onGroupingChange, onSortingChange, groupingOption, sortingOption }) => {
  return (
    <div className="controls">
      <div>
        <label>Group by: </label>
        <select value={groupingOption} onChange={e => onGroupingChange(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div>
        <label>Sort by: </label>
        <select value={sortingOption} onChange={e => onSortingChange(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
      
      {/* <style jsx>{`
        .controls {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        select {
          margin-left: 10px;
        }
      `}</style> */}
    </div>
  );
};

export default SortingAndGroupingControls;
