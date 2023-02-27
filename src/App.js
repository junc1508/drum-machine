import { useState } from "react";
import Controller from "./Controller";
import bankOne from "./data/bankOne";
import bankTwo from "./data/bankTwo";
import Logo from "./Logo";
import PadList from "./PadList";
import VolumeSlider from "./VolumeSlider";
function App() {
  //control the state for Power, also controls the Pads
  //powerChecked true (default) => on
  //false => off (update the url to #) 
  const [powerChecked, setPowerChecked] = useState(true);
  //state for display, it will update with all the events
  const [display, setDisplay] = useState(String.fromCharCode(160));
  const clearDisplay = () => {
    setDisplay(String.fromCharCode(160));
  }
  

  const handlePower = () => {
    setPowerChecked(!powerChecked);
    // when turning power on and off show nothing
    clearDisplay();
    
  }

  //control the state for Bank, also controls the Pads
  //bankChecked false (default) => bankOne for pads
  //true => bankTwo 
  const [bankChecked, setBankChecked] = useState(false);
  const handleBank = () => {
    setBankChecked(!bankChecked);
    // if using bankOne, display
    if (!bankChecked) {
      setDisplay("Heater Kit");
    } else {
      setDisplay("Smooth Piano Kit");
    }
  }

  //control the volume slider
  const [volume, setVolume] = useState(0.3);
  const handleVolume = (e) => {
    // do not need to check power because when poweroff cannot move it
    setVolume(e.target.value);
    const vol = Math.round(100 * volume);
    setDisplay("Volume: " + vol);
  }

  

  return (
    <div className="app">
      <div className="inner-container" id="drum-machine">
        <div className="pad-bank">
        {/* keybads based on bankchecked and powerchecked */}
        <PadList pads={ bankChecked? bankTwo : bankOne} power = {powerChecked} volume={ volume } parentCallback = {setDisplay} /> 
        </div>
        <div className="controls">
          <Logo />
          <div className="controls-container">
            {/* power controller */}
            <Controller className="Power" name = "Power" checked={ powerChecked } handleChange={ handlePower } power= {true} />
            <div id="display"> 
            <p> { display } </p>
            </div>
            <VolumeSlider volume={ volume } handleVolume={ handleVolume } power = {powerChecked} />
            {/* Bank controller */}
            <Controller className="Bank" name = "Bank" checked={ bankChecked } handleChange={ handleBank } power = { powerChecked } />
          </div>
        </div>      
      </div>
    </div>
    
  );
}

export default App;
