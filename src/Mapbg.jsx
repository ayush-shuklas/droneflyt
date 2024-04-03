import React, { useState } from 'react';

const Mapbg = () => {
  const [startX, setStartX] = useState('');
  const [startY, setStartY] = useState('');
  const [dropX, setDropX] = useState('');
  const [dropY, setDropY] = useState('');
  const [time, setTime] = useState('');

  const simulate = () => {
    const startXCoord = parseFloat(startX);
    const startYCoord = parseFloat(startY);
    const dropXCoord = parseFloat(dropX);
    const dropYCoord = parseFloat(dropY);
    const duration = parseInt(time) * 1000;

    
    const dx = dropXCoord - startXCoord;
    const dy = dropYCoord - startYCoord;
    const distance = Math.sqrt(dx * dx + dy * dy);

  
    const speed = distance / duration;

    
    let currentX = startXCoord;
    let currentY = startYCoord;
    const step = 1000;

    const interval = setInterval(() => {
      const newX = currentX + dx * (step / duration);
      const newY = currentY + dy * (step / duration);

      currentX = newX;
      currentY = newY;

      console.log(`Drone position: (${currentX}, ${currentY})`);

      if (Math.abs(currentX - dropXCoord) < speed && Math.abs(currentY - dropYCoord) < speed) {
        clearInterval(interval);
        console.log("Drone reached drop point.");
      }
    }, step);
  };

  return (
    <div>
      <div>
        <label htmlFor="startX">Initial X:</label>
        <input type="number" id="startX" value={startX} onChange={(e) => setStartX(e.target.value)} placeholder="Initial X" />
        <label htmlFor="startY">Initial Y:</label>
        <input type="number" id="startY" value={startY} onChange={(e) => setStartY(e.target.value)} placeholder="Initial Y" />
      </div>
      <div>
        <label htmlFor="dropX">Drop X:</label>
        <input type="number" id="dropX" value={dropX} onChange={(e) => setDropX(e.target.value)} placeholder="Drop X" />
        <label htmlFor="dropY">Drop Y:</label>
        <input type="number" id="dropY" value={dropY} onChange={(e) => setDropY(e.target.value)} placeholder="Drop Y" />
      </div>
      <div>
        <label htmlFor="time">Enter Time (seconds):</label>
        <input type="number" id="time" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Time in seconds" />
        <button onClick={simulate}>Begin Simulation</button>
      </div>
    </div>
  );
};

export default Mapbg;
