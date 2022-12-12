import React from 'react';
import { Outlet} from 'react-router-dom';

import Home from './pages/Home.js';
import Personas from './pages/Personas.js';

const Main = () => {
  return (
    <Outlet></Outlet>
  );
}

export default Main;

// example routing code taken from https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-react