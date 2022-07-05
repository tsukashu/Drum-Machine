import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App App-header'>
      <div className='App-container' id='drum-machine'>
        <h2>Drum Machine 🥁</h2>
        <div id='display'>display</div>
        <div className='drum-pad' id='audio1'>
          Q
          <audio
            controls
            src='/src/assets/drums/Bld_H1.mp3'
            className='clip'
            id='Q'
          ></audio>
        </div>
        <div className='drum-pad' id='audio2'>
          W
          <audio
            controls
            src='/src/assets/drums/Bld_H1.mp3'
            className='clip'
            id='W'
          ></audio>
        </div>
        <div className='drum-pad' id='audio3'>
          E
          <audio
            controls
            src='/src/assets/drums/Bld_H1.mp3'
            className='clip'
            id='E'
          ></audio>
        </div>
        <div className='drum-pad' id='audio4'>
          A
          <audio
            controls
            src='/src/assets/drums/Bld_H1.mp3'
            className='clip'
            id='A'
          ></audio>
        </div>
        <div className='drum-pad' id='audio5'>
          S
          <audio
            controls
            src='/src/assets/drums/Bld_H1.mp3'
            className='clip'
            id='S'
          ></audio>
        </div>
        <div className='drum-pad' id='audio6'>
          D
          <audio
            controls
            src='/src/assets/drums/Bld_H1.mp3'
            className='clip'
            id='D'
          ></audio>
        </div>
        <div className='drum-pad' id='audio7'>
          Z
          <audio
            controls
            src='/src/assets/drums/Bld_H1.mp3'
            className='clip'
            id='Z'
          ></audio>
        </div>
        <div className='drum-pad' id='audio8'>
          X
          <audio
            controls
            src='/src/assets/drums/Bld_H1.mp3'
            className='clip'
            id='X'
          ></audio>
        </div>
        <div className='drum-pad' id='audio9'>
          C
          <audio
            controls
            src='/src/assets/drums/Bld_H1.mp3'
            className='clip'
            id='C'
          ></audio>
        </div>
      </div>
    </div>
  );
}

export default App;
