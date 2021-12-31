import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App1 from './AppPFCLS';
import App2 from './AppPoke';


import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element= {
          <div>
            <div>
              <h1 >Choose A Game</h1>
            </div>
            <nav>
              <Link to="/app">  <img src={require('../src/assets/img/PFC.jpg')}></img></Link>
              <Link to="/app1"><img src={require('../src/assets/img/PFCLS.jpg')}></img></Link>
              <Link to="/app2"><img src={require('../src/assets/img/poke.jpg')}></img></Link>

            </nav>
        </div>
        }
          />
      <Route path="/app" element={<App />} />
      <Route path="/app1" element={<App1 />} />
      <Route path="/app2" element={<App2 />} />

    </Routes>
  </BrowserRouter>,
  rootElement
);
