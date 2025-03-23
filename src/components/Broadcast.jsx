import React, { useState } from 'react';

export default function Broadcast() {
  const [group, setGroup] = useState('');
  const [groups, setGroups] = useState([]);

  const createGroup = () => {
    if (group) {
      setGroups([...groups, group]);
      setGroup('');
    }
  };

  return (
    <div className="main-content">
      <h2>Broadcast Groups</h2>
      <input
        type="text"
        value={group}
        placeholder="Create new group"
        onChange={(e) => setGroup(e.target.value)}
      />
      <button onClick={createGroup}>Create</button>
      <ul>
        {groups.map((g, index) => (
          <li key={index}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
