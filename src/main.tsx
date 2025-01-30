import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import App from './App.tsx'
import GreeneServices from './GreeneServices.tsx'
import SiloCleaning from './SiloCleaningServices.tsx'
import Banner from "./Banner.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Router>
          <Banner/>
          <Routes>
              <Route path="/greene-services" element={<GreeneServices/>}/>
              <Route path="/" element={<App/>}/>
              <Route path="/silo-cleaning" element={<SiloCleaning/>}/>
          </Routes>
      </Router>
  </StrictMode>,
)
