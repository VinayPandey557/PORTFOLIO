
import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState(140);
  const [weight , setWeight] = useState(70);

  function onWeightChange(e)  {
       setWeight(e.target.value)
  }

  function onHeightChange(e){
      setHeight(e.target.value)
  }

  const output = useMemo(() =>{
     const calculateHeight = height/100;
     return(weight/(calculateHeight*calculateHeight)).toFixed(1)
  },[weight, height])
  return (
 <main>
      <h1>BMI Calculator</h1>
      <div className="input-section">
        <p className='slider-output' >Weight: {weight} Kg</p>
        <input className='input-slider' type='range'
        step="1"
        min="40"
        max="300" 
        onChange={onWeightChange}></input>
        <p className='slider-output'>Height: {height}cm</p>
        <input className='input-slider' type='range'
        step="1"
        min="140"
        max="300"
        onChange={onHeightChange}
        ></input>
      </div>
      <div className='output-section'>
        <p>
        <strong>Your BMI is</strong>
        </p> 
        <p className="output"><button>{output}</button></p>
      </div>
 </main>
  
      
  

  )
}

export default App
