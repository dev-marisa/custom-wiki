import React, { useState } from 'react';
import { HeaderModel } from './models';

// Present a form to the user
const HeadingForm = props => {
  
  const [style, setStyle] = useState("")
  const [id, setId] = useState("");
  const [classes, setClasses] = useState("");
  let textInput = null;


  // quick reference for header styles
  const headerStyles = {
    "h1": {fontWeight: 500, fontSize: "32px", lineHeight: "48px", marginBottom: "20px"},
    "h2": {fontWeight: 500, fontSize: "26px", lineHeight: "39px", marginBottom: "20px"},
    "h3": {fontWeight: 500, fontSize: "22px", lineHeight: "33px", marginBottom: "20px"},
    "h4": {fontWeight: 500, fontSize: "22px", lineHeight: "33px", marginBottom: "20px"}
  };

  const done = e => {
    e.preventDefault();
    props.done(new HeaderModel(props.tag, props.text, props.align, style, id, classes));
  }

  const cancel = e => {
    e.preventDefault();
    props.cancel("cancelling");
  }


  return (
    <form onSubmit={done} onReset={cancel}>
      <div className="input-group my-3">
        <span className="input-group-text" style={{width:"50px"}}>{props.tag}</span>
        <input type="text" 
          className="form-control mb0" 
          onChange={e => props.setText(e.target.value)} 
          style={{...headerStyles[props.tag], textAlign: props.align}}
          value={props.text} 
          ref={(input) => { textInput = input; }}
        />
        {/* add the ref back in for focus control later */}
        {/* ref={(input) => { textInput = input; }} */}
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Custom Style</span>
        <input type="text" 
          className="form-control mb0" 
          onChange={e => setStyle(e.target.value)} 
          value={style} 
        />
      </div>
      <button type="submit" className="btn btn-outline-primary">Done</button>
      <button type="reset" className="btn btn-outline-secondary">Cancel</button>
    </form>
  );
  
}
  
export default HeadingForm;
