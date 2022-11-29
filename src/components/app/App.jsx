/* eslint-disable max-len */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../game/Home';
import Game from '../game/Game';

export default function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/game" element={<Game />}/>
      </Routes>
    </>
  );
}
