// import React, { useState, useEffect } from 'react';

// const XPStatsPage = () => {
//   // Initial states for XP and level
//   const [xp, setXp] = useState(0); // XP starts at 0
//   const [level, setLevel] = useState(0); // Level starts at 0

//   // Function to calculate the XP threshold for the next level
//   const nextLevelThreshold = () => {
//     return level === 0 ? 50 : 10 * (level * 2) + 1;
//   };

//   // Simulate completing a module
//   const completeModule = () => {
//     setXp(prevXp => prevXp + 10);
//   };

//   // Check for level up whenever XP changes
//   useEffect(() => {
//     if (xp >= nextLevelThreshold()) {
//       setLevel(prevLevel => prevLevel + 1); // Level up
//       setXp(0); // Reset XP for the next level
//     }
//   }, [xp]); // Trigger when XP changes

//   return (
//     <div className="xp-stats-container">
//       <h1>Your Progress</h1>
//       <div className="xp-details">
//         <p><strong>XP:</strong> {xp} XP</p>
//         <p><strong>Level:</strong> {level}</p>
//         <p><strong>Next Level Threshold:</strong> {nextLevelThreshold()} XP</p>
//       </div>

//       <button onClick={completeModule}>Complete Module</button>
//       {/* This button simulates completing a module */}
//     </div>
//   );
// };

// export default XPStatsPage;
