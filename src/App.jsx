import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { useHotkeys } from 'react-hotkeys-hook';
import { Howl, Howler } from 'howler';


// audio import
import audio0 from './audio/drums/Bld_H1.mp3';
import audio1 from './audio/drums/Bld_H1.mp3';
import audio2 from './audio/drums/Brk_Snr.mp3';
import audio3 from './audio/drums/Cev_H2.mp3';
import audio4 from './audio/drums/Chord_1.mp3';
import audio5 from './audio/drums/Chord_2.mp3';
import audio6 from './audio/drums/Chord_3.mp3';
import audio7 from './audio/drums/Dry_Ohh.mp3';
import audio8 from './audio/drums/Dsc_Oh.mp3';
import audio9 from './audio/drums/Give_us_a_light.mp3';
import audio10 from './audio/drums/Heater-1.mp3';
import audio11 from './audio/drums/Heater-2.mp3';
import audio12 from './audio/drums/Heater-3.mp3';
import audio13 from './audio/drums/Heater-4_1.mp3';
import audio14 from './audio/drums/Heater-6.mp3';
import audio15 from './audio/drums/Kick_n_Hat.mp3';
import audio16 from './audio/drums/punchy_kick_1.mp3';
import audio17 from './audio/drums/RP4_KICK_1.mp3';
import audio18 from './audio/drums/side_stick_1.mp3';
// audio import end

const ReactHotkeyTest = () => {
  useHotkeys('space', () => console.log('this is test log'));
  useHotkeys('space', () => document.getElementById(0).play());

  return <audio controls src={audio0} className='clip' id={0}></audio>;
};

const DramPad = (props) => {
  useHotkeys(props.id, () => console.log(`${props.id} is pressed`));
  useHotkeys(props.id, () => document.getElementById(props.id).play());
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

function App() {
  return (
    <div className='App App-header'>
      <p>press SPACE key to test react hotkeys</p>
      {/* <ReactHotkeyTest /> */}
      <div className='App-container' id='drum-machine'>
        <h2>Drum Machine 🥁</h2>
        <div id='display'>display</div>

        {/* <DramPad id={'space'} audio={audio18} /> */}
        <DramPad id={'Q'} audio={audio1} />
        <DramPad id={'W'} audio={audio2} />
        <DramPad id={'E'} audio={audio3} />
        <DramPad id={'A'} audio={audio4} />
        <DramPad id={'S'} audio={audio5} />
        <DramPad id={'D'} audio={audio6} />
        <DramPad id={'Z'} audio={audio7} />
        <DramPad id={'X'} audio={audio8} />
        <DramPad id={'C'} audio={audio9} />
      </div>
    </div>
  );
}





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

export default App;
