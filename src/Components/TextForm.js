import "../Css/TextForm.css"
import {FaCopy} from 'react-icons/fa'
import { useState } from "react";
const TextForm = ({isDark}) => {
   const[data,setData]= useState('');
   const[show,setshow]= useState(false);
   const[space,setSpace]= useState(0);
   const[word,setword]= useState(0);
   function CopyToClip(){
       document.querySelector('textarea').select();
       document.execCommand('copy');
   }
   function toFocus(){
    document.querySelector('textarea').focus();
   }
   function NumberOf(){
     setshow(!show);
     if(data==='') {
       setword(0);
       setSpace(0);
       return;
     }
     let space=0;
     for (let index = 0; index < data.length; index++) {
       if(data.charCodeAt(index)===32){
         space++;
       }
     }
     setword(data.split(' ').length);
     setSpace(space);
   }
   function ToCapital(){
     let Text='';
     let arr=data.split(' ');
     arr.forEach((iterator,index)=>{
      Text+=iterator.substring(0,1).toUpperCase()+iterator.substring(1,iterator.length).toLowerCase();
      if(index!==arr.length-1){
        Text+= " ";
      }
     })
     setData(Text);
   }
  return(

    <div>

    <div className='TextForm'>
  <h1>Enter the Text To analyze</h1>
  <textarea className={isDark?'darkTextArea':''} rows={30} cols={30} value={data} onChange={(e)=>setData(e.target.value)} />
  <FaCopy onClick={CopyToClip} />
  <div className='Buttons'>
  <button onClick={()=>setData('')}>Reset</button>
  <button onClick={toFocus} >Write</button>
  <button onClick={()=>setData((data)=>data.toUpperCase())} >UpperCase</button>
  <button onClick={()=>setData((data)=>data.toLowerCase())} >LowerCase</button>
  <button onClick={()=>setData((data)=>data.trim())} >Trim</button>
  <button onClick={ToCapital} >Capitalize</button>
  </div>
  </div>
  <div className='Text'>
  <button onClick={NumberOf}>{show?'see less':'see More'}</button>
  {show?
 <div className='Textarea'>
   <p>length of Your String is {data.length} With space and Without space {data.length-space} </p>
   <p>Your String Contain {word} words</p>
   <p>No of spaces {space}</p>
   <p>{0.08*word} Minutes to read </p>
 </div> :null
  }
  </div>
    </div>
    );
};

export default TextForm;