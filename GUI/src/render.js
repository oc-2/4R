import React from 'react'
import {Outlet} from 'react-router-dom'
import Menu from './components/elements/Menu'
export const GlobalContext = React.createContext();
export default function App() {
  return (
    <React.Fragment>
      <GlobalContext.Provider value={{
        
      }}>
        <Outlet/>
      </GlobalContext.Provider>
    </React.Fragment>
    )
}
