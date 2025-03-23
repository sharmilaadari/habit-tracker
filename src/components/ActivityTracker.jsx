import React from 'react';

export default function ActivityTracker() {
  const days = 7;
  const weeks = 10;
  const data = Array.from({ length: weeks * days }, () => Math.floor(Math.random() * 5)); // Simulated activity data

  const getColor = (level) => {
    const colors = ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'];
    return colors[level];
  };

  return (
    <div className="main-content">
      <h2>Activity Tracker (GitHub Style)</h2>
      <div style={{ display: 'flex' }}>
        {Array.from({ length: weeks }).map((_, weekIdx) => (
          <div key={weekIdx} style={{ display: 'flex', flexDirection: 'column', marginRight: '4px' }}>
            {Array.from({ length: days }).map((_, dayIdx) => {
              const activityLevel = data[weekIdx * days + dayIdx];
              return (
                <div
                  key={dayIdx}
                  style={{
                    width: '15px',
                    height: '15px',
                    backgroundColor: getColor(activityLevel),
                    marginBottom: '3px',
                    borderRadius: '3px',
                  }}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
      <p>Green intensity increases with activities done ✅</p>
    </div>
  );
}
