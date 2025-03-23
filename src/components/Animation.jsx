import React from 'react';

export default function Animation() {
  return (
    <div className="main-content">
      <h2>Break Free Animation</h2>
      <p>This will represent cutting puppet strings (Habits/Tasks).</p>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <div style={{ width: '100px', height: '200px', background: '#ddd', margin: 'auto', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-50px', left: '45px', height: '50px', width: '10px', background: 'black' }}></div>
          <div style={{ position: 'absolute', top: '-50px', left: '0px', width: '100%', textAlign: 'center' }}>🎭 Puppet</div>
        </div>
        <p>✨ Imagine wires being cut as you complete habits</p>
      </div>
    </div>
  );
}
