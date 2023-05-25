import { useState } from 'react';
import './App.css';
import UseRefEx from './components/UseRefEx';
import Timer from './components/Timer';
// import Counter from './components/Counter';
import FormManage from './components/FormManage';
import ClickMe from './components/ClickMe';
import { Button } from "./components/Custom/Button.jsx"
import PinTab from './components/Custom/PinTab';
function App() {

  return (
    <div className="App">
      {/* <UseRefEx /> */}
      {/* <Timer />
      <FormManage /> */}
      {/* <ClickMe /> */}
      {/* <Button colorSheme="teal" size="medium" >My Button</Button> */}

      <PinTab length={4} maxChar={1} />

    </div>
  );
}

export default App;
