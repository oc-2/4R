import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/screens/App';
const App = React.lazy(()=> import( './render'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='*' element={<App/>}>
        <Route path='*' element={<Home/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);