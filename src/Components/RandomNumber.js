import React, { useState } from 'react'
import "../Css/RandomNumber.css"
const RandomNumber = () => {
    const[min,setmin]=useState(0);
    const[max,setmax]=useState(0);
    const[number,setNumber]=useState(0);
    const[show,setShow]=useState(false);

    function getNumber(Min,Max){
        Min=parseInt(Min);
        Max=parseInt(Max)
        if(Max<Min){
            setShow(false);
            return;
        }
        const step1=Max-Min*1;
        const step2= Math.random()*step1;
        const step3=Math.floor(step2)+Min;
        setNumber(step3);
        setShow(true);
 }
    return (
        <div className='RandomNumber'>
            <div>
                <div className='RandomMain'>
                <div>
                    <h3>RandomNumber Fetch</h3>
                </div>
                    <div className='Input' >
                    <div>
                        <h4>Min</h4>
                        <input type='number' value={min} onChange={(e)=>setmin(e.target.value)} />
                    </div>
                    <div>
                        <h4>Max</h4>
                        <input type='number'value={max} onChange={(e)=>setmax(e.target.value)} />
                    </div>
                    </div>
                    {show? <h1>{number}</h1>:<p>Make Sure Min is Not Less Than Max</p>}
                    <div>
                    <button onClick={()=>getNumber(min,max)}>GetRandomNumber</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RandomNumber