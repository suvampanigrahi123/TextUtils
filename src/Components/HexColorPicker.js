import React ,{useState} from 'react'
import {ChromePicker} from 'react-color'
import '../Css/HexColor.css'
const HexColorPicker = () => {
    const [Color,setColor]=useState('#fff');
    const [show,setshow]=useState(false);
    return (
        <div className='HexColor'>
        <button onClick={()=>setshow(!show)}>{show? 'CloseColorPicker':'ShowColorPicker'}</button>
        {
            show&&<ChromePicker color={Color} onChange={(updatedColor)=>setColor(updatedColor.hex)} />
        }
        <h1 style={{color:`${Color}`}}>You picked {Color}</h1>
        
        </div>
    )
}

export default HexColorPicker
