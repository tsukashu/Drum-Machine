import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { useHotkeys } from 'react-hotkeys-hook';
import { Howl, Howler } from 'howler';

const TESTAudio = '/src/assets/drums/Bld_H1.mp3';

const DramPad = (props) => {
  return (
    <button
      className='drum-pad'
      id='audio0'
      onClick={() => document.getElementById(props.id).play()}
    >
      {props.id}
      <audio src={props.audio} className='clip' id={props.id}></audio>
    </button>
  );
};
const DramPadWithHowler = (props) => {
  const howlerTest = (audio) => {
    const sound = new Howl({
      src: [audio],
    });

    sound.play();
  };
  return (
    <button
      className='drum-pad'
      id='audio0'
      onClick={() => howlerTest(props.audio)}
    >
      {props.id}
      <audio src={props.audio} className='clip' id={props.id}></audio>
    </button>
  );
};

function App() {
  return (
    <div className='App App-header'>
      <div className='App-container' id='drum-machine'>
        <h2>Drum Machine 🥁</h2>
        <div id='display'>display</div>

        <DramPad id={'Q'} audio={TESTAudio} />
        <DramPad id={'W'} audio={TESTAudio} />
        <DramPad id={'E'} audio={TESTAudio} />
        <DramPad id={'A'} audio={TESTAudio} />
        <DramPad id={'S'} audio={TESTAudio} />
        <DramPad id={'D'} audio={TESTAudio} />
        <DramPad id={'Z'} audio={TESTAudio} />
        <DramPad id={'X'} audio={TESTAudio} />
        <DramPad id={'C'} audio={TESTAudio} />
      </div>
    </div>
  );
}

export default App;
