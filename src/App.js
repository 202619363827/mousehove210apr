// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css"; // Import the CSS file for styling


const App = () => {
  const [logs, setLogs] = useState([]);


  // Function to add log to logs array
  const addLog = ( time, eventName) => {
    setLogs(prevLogs => [...prevLogs, {  time, eventName }]);
  };


  return (
    <div>
      <h1
        className="h1-style" // Add a CSS class for styling h1
        onMouseOver={() => {
          const time = new Date().toLocaleString();
          addLog(time, "Mouseover (h1)");
        }}
        onMouseOut={() => {
          const time = new Date().toLocaleString();
          addLog(time, "Mouseout (h1)");
        }}
      >
        Hover over me! (h1)
      </h1>
      <h2
        className="h2-style" // Add a CSS class for styling h2
        onMouseOver={() => {
          const time = new Date().toLocaleString();
          addLog(time, "Mouseover (h2)");
        }}
        onMouseOut={() => {
          const time = new Date().toLocaleString();
          addLog(time, "Mouseout (h2)");
        }}
      >
        Hover over me! (h2)
      </h2>
      <div
        className="div-style" // Add a CSS class for styling div
        onMouseOver={() => {
          const time = new Date().toLocaleString();
          addLog(time, "Mouseover (div)");
        }}
        onMouseOut={() => {
          const time = new Date().toLocaleString();
          addLog(time, "Mouseout (div)");
        }}
      >
        Hover over me! (div)
      </div>
      <table className="table-style"> {/* Add a CSS class for styling table */}
        <thead>
          <tr>
            <th className="table-header">Time</th> {/* Add a CSS class for styling table header */}
            <th className="table-header">Event Name</th> {/* Add a CSS class for styling table header */}
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log.time}>
              <td>{log.time}</td>
              <td>{log.eventName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default App;


