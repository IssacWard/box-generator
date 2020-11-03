import './App.css';
import BoxForm from './Components/BoxForm';
import BoxDisplay from './Components/BoxDisplay';
import React, { useState } from 'react';

function App() {


  const [form, setForm] = useState({
    color:"",
    width:100,
    height:100
  })

  const handleForm = e =>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const [colors, setColors] = useState([
    {
      color: "black",
      width: 100,
      height: 100
    },
    {
      color:"red",
      width: 100,
      height: 100
    }
  ])

  const handleColor = e =>{
    e.preventDefault();
    setColors([...colors,form]);
    setForm({
      color:"",
      width:100,
      height:100
    })
  }
    
    return (
      <>
        <BoxForm inputs={form} handleForm={handleForm} handleSubmit={handleColor}/>
        <div>
          {
            colors.map((aColor,i)=>{
              return <BoxDisplay 
                        key={i}
                        color={aColor.color}
                        width={aColor.width}
                        height={aColor.height}
                      />
            })
          }
        </div>
      </>
    );
}
  
export default App;