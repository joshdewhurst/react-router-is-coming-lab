import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";

import gameOfThrones from './gameOfThrones'

import Houses from "./components/Houses";
import House from './components/House';
import Home from "./components/Home";
import Header from "./components/partials/Header";
import Member from "./components/Member";


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/houses' element={ <Houses details={gameOfThrones}/> } />
          <Route path='/houses/:id' element={ <House details={gameOfThrones} />} />
          <Route path='/houses/:id/members/:id' element={ <Member details={gameOfThrones} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}