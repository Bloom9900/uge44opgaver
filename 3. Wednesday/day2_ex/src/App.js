import { useEffect, useState } from 'react';
import './App.css';
import {DisplayJoke} from './fetchJoke';
import Table from './ListDemo';

function MyCount(props) {
  
  const [countValue, setCountValue] = useState(props.initVal);

  function incrementVal() {
    let changeVal = 0;
    if(props.changeVal != null) {
      changeVal = props.changeVal;
    } else {
      changeVal = 1;
    }
    setCountValue(countValue + props.changeVal);
  }

  function decrementVal() {
    let changeVal = 0;
    if(props.changeVal != null) {
      changeVal = props.changeVal;
    } else {
      changeVal = 1;
    }
    setCountValue(countValue - props.changeVal);
  }

  useEffect(
    () => {
      localStorage.setItem("countValue", countValue);
    }, [countValue]
  )

  return (
    <div>
      <button onClick={incrementVal}>Increase Value</button>
      <p>{countValue}</p>
      <button onClick={decrementVal}>Decrease Value</button>
    </div>
  )
}

function App() {
  let initVal = 0;
  let changeVal = 5;

  if(localStorage.getItem("countValue") != null) {
    initVal = Number(localStorage.getItem("countValue"));
  }

  return (
    <div>
      <MyCount initVal={initVal} changeVal={changeVal} />
      <br></br>
      <DisplayJoke />

      <Table />
    </div>
  );
}

export default App;
