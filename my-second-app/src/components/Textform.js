import React , {useState} from "react";

export default function Textform(props) {
    const handleUpClick=() =>{
        console.log("updated textform"+ {text})
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleDownClick=() =>{
        console.log("updated textform"+ {text})
        let newText= text.toLowerCase();
        setText(newText);
    }
    const handleOnChange=(event) =>{
        console.log("handled onChange")
    setText(event.target.value)
    }
    const [text, setText] = useState("Enter text here");
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        
        <textarea
          className="form-control"
          onChange={handleOnChange}
          value = {text}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to Lowercase</button>
      <div className="container" my-2>
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>

    </div>
    </div>
  );
}
