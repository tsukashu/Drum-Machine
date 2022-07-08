import { useState } from 'react';
import './App.css';

import { useHotkeys } from 'react-hotkeys-hook';

import audioData from './Audio';
console.log(audioData);

const DramPad = (props) => {
  useHotkeys(props.id, () => console.log(`${props.id} is pressed`));
  useHotkeys(props.id, () => document.getElementById(props.id).play());
  useHotkeys(props.id, () =>
    props.setDisplayText(audioData[props.audioNo].title)
  );
  return (
    <button
      className='drum-pad'
      id={props.audioNo}
      onClick={() => {
        document.getElementById(props.id).play();
        props.setDisplayText(audioData[props.audioNo].title);
      }}
    >
      {props.id}
      <audio
        src={audioData[props.audioNo].src}
        className='clip'
        id={props.id}
      ></audio>
    </button>
  );
};

function App() {
  const [displayText, setDisplayText] = useState('');
  return (
    <div className='App App-header'>
      <div className='App-container' id='drum-machine'>
        <h2>Drum Machine 🥁</h2>
        <div id='display'>{displayText}</div>

        {/* <DramPad id={'space'} audio={audio18} /> */}
        <DramPad id={'Q'} audioNo={1} setDisplayText={setDisplayText} />
        <DramPad id={'W'} audioNo={2} setDisplayText={setDisplayText} />
        <DramPad id={'E'} audioNo={3} setDisplayText={setDisplayText} />
        <DramPad id={'A'} audioNo={4} setDisplayText={setDisplayText} />
        <DramPad id={'S'} audioNo={5} setDisplayText={setDisplayText} />
        <DramPad id={'D'} audioNo={6} setDisplayText={setDisplayText} />
        <DramPad id={'Z'} audioNo={7} setDisplayText={setDisplayText} />
        <DramPad id={'X'} audioNo={8} setDisplayText={setDisplayText} />
        <DramPad id={'C'} audioNo={9} setDisplayText={setDisplayText} />
      </div>
    </div>
  );
}

export default App;
