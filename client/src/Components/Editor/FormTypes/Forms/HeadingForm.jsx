import React, { useState, useRef, useEffect } from 'react';
import { HeaderModel } from './models';

// from for creating a header: h1, h2, h3, h4 
// do we need h5 and h6?
const HeadingForm = props => {
  
  // const [style, setStyle] = useState("")
  // const [id, setId] = useState("");
  // const [classes, setClasses] = useState("");
  const [text, setText] = useState("");

  // should really do something with this huh?
  let textInput = useRef(null);

  // quick reference for header styles
  const headerStyles = {
    "h1": {fontWeight: 500, fontSize: "32px", lineHeight: "48px", marginBottom: "20px"},
    "h2": {fontWeight: 500, fontSize: "26px", lineHeight: "39px", marginBottom: "20px"},
    "h3": {fontWeight: 500, fontSize: "22px", lineHeight: "33px", marginBottom: "20px"},
    "h4": {fontWeight: 500, fontSize: "22px", lineHeight: "33px", marginBottom: "20px"}
  };

  const done = e => {
    e.preventDefault();
    props.done(new HeaderModel(props.tag, text, props.align, "", "", ""));
  }

  const cancel = e => {
    e.preventDefault();
    props.cancel("cancelling");
  }

  useEffect(() => {
    console.log("text", props)
    if(props.ele) {
      setText(props.ele.text);
    }
    textInput.current.focus();
  }, [props.tag]);

  return (
    <form onSubmit={done} onReset={cancel}>
      <div className="input-group my-3">
        <span className="input-group-text" style={{width:"50px"}}>{props.tag}</span>
        <input type="text" 
          className="form-control mb0" 
          onChange={e => setText(e.target.value)} 
          style={{...headerStyles[props.tag], textAlign: props.align}}
          value={text} 
          ref={textInput} 
        />
      </div>
      {/* <div className="input-group mb-3">
        <span className="input-group-text">Custom Style</span>
        <input type="text" 
          className="form-control mb0" 
          onChange={e => setStyle(e.target.value)} 
          value={style} 
        />
      </div> */}
      <button type="submit" className="btn btn-outline-primary">Done</button>
      <button type="reset" className="btn btn-outline-secondary">Cancel</button>
      { props.ele ? 
        <button type="button" className="btn btn-outline-danger" onClick={props?.remove}>
          Remove
        </button> : ""}
    </form>
  );
  
}
  
export default HeadingForm;
