import React, {useState} from 'react'

export default function TextForms(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked" + text)
    let newText = text.toUpperCase(); 
    setText(newText)
    props.showAlert(": Converted to uppercase","success")
  }
  const handleLcClick = () => {
    // console.log("uppercase was clicked" + text)
    let newText = text.toLowerCase(); 
    setText(newText)
    props.showAlert(": Converted to lowercase","success")
  }
  const handleClearClick = () => {
    let newText = ''; 
    setText(newText)
    props.showAlert(": All cleared","success")
  }
  
  const handleOnChange = (event) =>{
    console.log("On Change")
    setText(event.target.value)
  }
  const handleCopyText = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert(": Copied All text to clipbord","success")
  }
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert(": All extra spaces removed","success")
  }

  const [text,setText] = useState("Enter your text  ")
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2 className="mb-2">{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#0a0743':'white',color:props.mode==='dark'?'white':'black'}} rows="10"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick} > convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLcClick} > convert to Lovercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick} > All clear</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyText} > Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace} > Remove Extra Space</button>
    </div>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Character</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute will take to read this</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview "}</p>
    </div>
    </>
    )
}
