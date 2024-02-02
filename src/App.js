import React, { useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  function display() {
      try{
        if (value2 == 1) {
          setValue(parseFloat(value) + parseFloat(value1));
        }
        if (value2 == 2) {
          setValue(parseFloat(value1) - parseFloat(value));
        }
        if (value2 == 3) {
          setValue(parseFloat(value1) * parseFloat(value));
        }
        if (value2 == 4) {
          let temp = (parseFloat(value1) / parseFloat(value) );
          if(temp == Infinity)
          {
            throw("No = 0");
          }
          else{
            setValue(temp);
          }
        }
      }
      catch(x){
        setValue(x);
      }
  }

  return (
    <>

      <div className='container'>
        <div className='calculator'>
          <form>
            <div className='display'>
              <input type='text' value={value} ></input>
            </div>
            <div>
              <input type='button' value={"DE"}  onClick={e => setValue('')}></input>
              <input type='button' value={"C"} onClick={e => setValue('')}></input>            
              <input type='button' value={"="} className='ans' onClick={display}></input>             
            </div>
            <div>
              <input type='button' value={"7"} onClick={e => setValue(value + e.target.value)}></input>
              <input type='button' value={"8"} onClick={e => setValue(value + e.target.value)}></input>
              <input type='button' value={"9"} onClick={e => setValue(value + e.target.value)}></input>
              <input type='button' value={"*"} onClick={(e => { setValue2('3'); setValue1(value); setValue(' ') })}></input>
            </div>
            <div>
              <input type='button' value={"4"} onClick={e => setValue(value + e.target.value)}></input>
              <input type='button' value={"5"} onClick={e => setValue(value + e.target.value)}></input>
              <input type='button' value={"6"} onClick={e => setValue(value + e.target.value)}></input>
              <input type='button' value={"-"} onClick={(e => { setValue2('2'); setValue1(value); setValue(' ') })}></input>
            </div>
            <div>
              <input type='button' value={"1"} onClick={e => setValue(value + e.target.value)}></input>
              <input type='button' value={"2"} onClick={e => setValue(value + e.target.value)}></input>
              <input type='button' value={"3"} onClick={e => setValue(value + e.target.value)}></input>
              <input type='button' value={"+"} onClick={(e => { setValue2('1'); setValue1(value); setValue(' ') })}></input>
            </div>
            <div>
              <input type='button' value={"00"} onClick={e => setValue(value + e.target.value)}></input>
              <input type='button' value={"0"} onClick={e => setValue(value + e.target.value)}></input>
              <input type='button' value={"."} onClick={e => setValue(value + e.target.value)}></input>
              <input type='button' value={"/"} onClick={(e => { setValue2('4'); setValue1(value); setValue(' ') })}></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;