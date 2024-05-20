import React, { useState } from 'react'
import "./QrCode.css";
export const QrCode = () => { 
    const [img ,setImg] = useState("");
    const [loading, setloading] = useState(false);
    const [qrData,setqrData] = useState();
    const [size,setSize] = useState()

async function getQrcode(){
  setloading(true);
   try{
     const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qrData)}`;
     setImg(url);
   }catch(err){
console.err("error generating Qr code", err)
   }finally{
   setloading(false);
   }

}

function downloadImg(){

  fetch(img)
.then((response)=>response.blob())
.then((blob)=>{
const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "qrcode.png";
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
})
.catch((error)=>{
  console.log("error while downloading",error);
}) 

  }




  return (
    <div className='app-container'>
        <h1>Qrcode Generator</h1>
       {loading && <p>Loading....</p> }
{img && <img src={img} />}
        <div className='inside-container'>

<label htmlFor='dataInput' className='input-label' >Data for QrCode:</label>
<input type="text" id="dataInput" placeholder="Enter Data for Qrcode" value={qrData} onChange={(e)=>setqrData(e.target.value)}/>

<label htmlFor='sizeInput' className='input-label' value={size} onChange={(e)=>setSize(e.target.value)} >Image Size</label>
<input type="text" id="sizeInput" placeholder="Enter image Size"/>

<button onClick={getQrcode} disabled={loading}>Generate Qrcode</button>
<button >Download Qrcode</button>

</div>

    </div>
  )
}
