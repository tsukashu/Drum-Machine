import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { useHotkeys } from 'react-hotkeys-hook';
import ReactPlayer from 'react-player';
import { Howl, Howler } from 'howler';


const TESTAudio = '/src/assets/drums/Bld_H1.mp3';


const DramPad = (props) => {
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
const DramPadDOM = () => {
  // this is implement version using Direct DOM manipulation.
  return (
    <button
      className='drum-pad'
      id='audio0'
      onClick={() => {
        document.getElementById('F').play();
      }}
    >
      F
      <audio src='/src/assets/drums/Bld_H1.mp3' className='clip' id='F'></audio>
    </button>
  );
};

const howlerSoundOnly = () => {
  const sound = new Howl({
    src: [TESTAudio],
  });

  sound.play();
};

const howlerTest = (audio) => {
  const sound = new Howl({
    src: [audio],
  });

  sound.play();
};

const ReactHotkeyTest = () => {
  const audio = TESTAudio;
  useHotkeys('a', () => {
    howlerTest(audio);
  });
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App App-header'>
      <div className='App-container' id='drum-machine'>
        <h2>Drum Machine 🥁</h2>
        <div>
          <ReactHotkeyTest />
        </div>
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
};

export default App;
