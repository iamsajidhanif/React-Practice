import React from 'react';

import logo from './logo.svg';
import './App.css';

let name = 'Sajid Hanif';

function App() {
  return (
    <>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello World
          </a>
        </header>
      </div> */}

      <class className="blank">Lovely</class>

      <nav className='mynav'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>

      <h1 className="heading1">Paragraph No. 1</h1>

      <div className="container">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, error vero ullam, consectetur et reiciendis deserunt quaerat vitae sequi enim laudantium odit numquam ad minima eum pariatur, possimus suscipit distinctio. Commodi vitae dolore consectetur vero? Ab at eveniet, fuga iusto accusantium reprehenderit ipsum nobis excepturi atque, dignissimos esse eos ratione!</p>
      </div>

      <h1>Hello, {name}</h1>
    </>
  );
}

export default App;
