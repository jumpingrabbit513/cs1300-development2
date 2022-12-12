import Main from './Main.js'
import Home from './pages/Home.js'
import Personas from './pages/Personas.js'
import Redesign from './pages/Redesign.js'
import Iterative from './pages/Iterative';
import Development from './pages/Development'

import { Routes, Route, HashRouter} from 'react-router-dom';



function App() {
  return (
    <div className="JumpingRabbitPortfolio">
      <HashRouter>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<Home/>} />
          <Route path="personas" element={<Personas/>} />
          <Route path="redesign" element={<Redesign/>} />
          <Route path="iterative" element={<Iterative/>} />
          <Route path="development" element={<Development/>} />
        </Route>
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
