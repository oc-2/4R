import React,{ Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
const App = React.lazy(()=> import( './render'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<Suspense fallback={<div>load</div>}><App/></Suspense>}>

      </Route>
      <Route path='*' element={<Suspense fallback={<div>load</div>}><div>404</div></Suspense>}/>
    </Routes>
  </BrowserRouter>
);