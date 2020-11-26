import React from "react";
import JournalsList from './components/JournalsList';
import MainPanel from './components/MainPanel';

function App() {
  return (

    <div>
    <MainPanel>
      <JournalsList/>
    </MainPanel>
    </div>
  )
}

export default App;