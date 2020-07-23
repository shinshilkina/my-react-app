import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
        <Technologies/>
        <Header/>
    </div>
  );
}

const Technologies = () => {
    return (
        <ul>
            <li>css</li>
            <li>html</li>
            <li>js</li>
            <li>react</li>
        </ul>
    );
} 

const Header = () => {
  return (
    <div className="Header">
        This is <code>Header</code>! :)
    </div>
  );
}



export default App;
