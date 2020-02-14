import React from 'react';
import './App.css';
import ClassComponentCounter from './components/UseState/Legacy/ClassComponentCounter';
import ClassComponentPreviousStateCounter from './components/UseState/Legacy/ClassComponentPreviousStateCounter';
import StateHookCounter from './components/UseState/StateHookCounter';
import StateHookPreviousStateCounter from './components/UseState/StateHookPreviousStateCounter';
import StateHookObjectManager from './components/UseState/StateHookObjectManager';
import StateHookArrayManager from './components/UseState/StateHookArrayManager';


function App() {
  return (
    <div className="App">
      <div>
        <label>ClassComponent State Counter</label>
        <ClassComponentCounter/>
      </div>

      <div>
        <label>ClassComponent Previous Counter</label>
        <ClassComponentPreviousStateCounter/>
      </div>

      <div>
        <label>StateHook_State Counter</label>
        <StateHookCounter/> 
      </div> 

      <div>
        <label>StateHook Previous State Counter</label>
        <StateHookPreviousStateCounter/> 
      </div>

      <div>
        <label>StateHook Object Manager</label>
        <StateHookObjectManager/> 
      </div>

      <div>
        <label>StateHook Array Manager</label>
        <StateHookArrayManager/> 
      </div>

    </div>
  );
}

export default App;
