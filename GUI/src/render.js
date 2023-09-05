import React from 'react'
import {Outlet} from 'react-router-dom'
import Logo from './components/elements/Head';
import Details from './components/elements/Details';
export const GlobalContext = React.createContext();
export default function App() {
  return (
    <React.Fragment>
      <GlobalContext.Provider value={{
        
      }}>
        <Logo/>
        <Outlet/>
        <Details/>
      </GlobalContext.Provider>
    </React.Fragment>
    )
}
