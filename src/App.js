import logo from './logg.png';
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
import "./App.css"; // Make sure to add the styles

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${inputValue}`);
    setInputValue("");
  };

  return (
    <div>
      <div>
      <img src={logo} className="App-logo" alt="logo" />
      </div>
      
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <h1>VWDA</h1>
          <p>Check the authenticity of your certificate</p>
          <div>
            <input
              type="text"
              className="input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter cert no."
            />
          </div>

          <button type="submit" className="button">
            Verify
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default App;

