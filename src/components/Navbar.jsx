/* eslint-disable no-unused-vars */
import React from 'react';
import ToggleTheme from './ToggleTHeme';

function Navbar() {
  return (
    <div className="navbar bg-base-100 fixed">
      <div className="flex-1">
        <a className="btn btn-ghost font-extrabold uppercase text-xl">Tic Tac Toe</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <ToggleTheme />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
