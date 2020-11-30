import React from "react";
import JournalsList from './components/JournalsList';
import MainPanel from './components/MainPanel';
import SideNav from "./components/SideNav";

function App() {
  return (

    <div>
            <SideNav/>
    <MainPanel>
      <JournalsList/>
    </MainPanel>
    </div>
  )
}

export default App;