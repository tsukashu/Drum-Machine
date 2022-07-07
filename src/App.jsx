import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { useHotkeys } from 'react-hotkeys-hook';
import { Howl, Howler } from 'howler';

import * as Audio from './Audio';

const ReactHotkeyTest = (props) => {
  useHotkeys('space', () => console.log('this is test log'));
  useHotkeys('space', () => document.getElementById(0).play());

  return <audio controls src={props.audio} className='clip' id={0}></audio>;
};

renameFunc();

const DramPad = (props) => {
  useHotkeys(props.id, () => console.log(`${props.id} is pressed`));
  useHotkeys(props.id, () => document.getElementById(props.id).play());
  useHotkeys(props.id, () => props.setDisplayText(props.audio));
  return (
    <button
      className='drum-pad'
      id='audio0'
      onClick={() => {
        document.getElementById(props.id).play();
        props.setDisplayText(props.audio);
      }}
    >
      {props.id}
      <audio src={props.audio} className='clip' id={props.id}></audio>
    </button>
  );
};

function App() {
  const [displayText, setDisplayText] = useState('');
  return (
    <div className='App App-header'>
      <ReactHotkeyTest audio={Audio.audio18} />
      <div className='App-container' id='drum-machine'>
        <h2>Drum Machine 🥁</h2>
        <div id='display'>{displayText}</div>

        {/* <DramPad id={'space'} audio={audio18} /> */}
        <DramPad
          id={'Q'}
          audio={Audio.audio1}
          setDisplayText={setDisplayText}
        />
        <DramPad
          id={'W'}
          audio={Audio.audio2}
          setDisplayText={setDisplayText}
        />
        <DramPad
          id={'E'}
          audio={Audio.audio3}
          setDisplayText={setDisplayText}
        />
        <DramPad
          id={'A'}
          audio={Audio.audio4}
          setDisplayText={setDisplayText}
        />
        <DramPad
          id={'S'}
          audio={Audio.audio5}
          setDisplayText={setDisplayText}
        />
        <DramPad
          id={'D'}
          audio={Audio.audio6}
          setDisplayText={setDisplayText}
        />
        <DramPad
          id={'Z'}
          audio={Audio.audio7}
          setDisplayText={setDisplayText}
        />
        <DramPad
          id={'X'}
          audio={Audio.audio8}
          setDisplayText={setDisplayText}
        />
        <DramPad
          id={'C'}
          audio={Audio.audio9}
          setDisplayText={setDisplayText}
        />
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
