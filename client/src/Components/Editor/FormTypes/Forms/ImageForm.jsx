import React, { useState, useEffect } from 'react';
import { ImageModel } from './models';


// helper function for formatting our style a bit
function formatStyle(style) {
  let str = JSON.stringify(style);
  let res = "";
  for(let letter of str) {
    if(letter === ",") {
      res += ";";
    } else if(letter !== "{" && letter !== "}" && letter !== "\"") {
      res += letter;
    }
  }
  res += ";"
  console.log(res);
  return res;
}

// Image upload is complicated
// probably put too much time into this one...
const ImageForm = props => {
  
  const [name, setName] = useState("not selected");
  const [src, setSrc] = useState("");
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [ratio, setRatio] = useState(null);
  const [imgStyle, setImgStyle] = useState({});

  const upload = e => {
    setSrc("");
    setImgStyle({});
    console.log(e);
    let file = e.target.files[0];
    console.log(file);
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      setName(file.Name);
      setSrc(reader.result);
    }, false);
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  const done = e => {
    e.preventDefault();
    props.done(new ImageModel("img", name, src, name, height, width, props.align, "", formatStyle(imgStyle), "", ""));
  }

  const cancel = e => {
    e.preventDefault();
    props.cancel();
  }

  const imgLoaded = e => {
    setWidth(e.target.width);
    setHeight(e.target.height);
    setRatio(e.target.width / e.target.height);
  }

  const changeHeight = e => {
    setHeight(e.target.value);
    setWidth(Math.round(e.target.value * ratio));
  }

  const changeWidth = e => {
    setWidth(e.target.value);
    setHeight(Math.round( e.target.value / ratio));
  }

  useEffect(() => {
    setImgStyle({height: height+"px", width: width+"px"});
  }, [height]);

  return (
    <form onSubmit={done} onReset={cancel}>
      
      {src ? <div className="row my-3">
        <div className="col input-group">
          <span className="input-group-text">Height</span>
          <input type="number" min="0" value={height} onChange={changeHeight} className="form-control" />
          <span className="input-group-text">px</span>
        </div>
        <div className="col input-group">
          <span className="input-group-text">Width</span>
          <input type="number" min="0" value={width} onChange={changeWidth} className="form-control" />
          <span className="input-group-text">px</span>
        </div>
        </div> : ""}

      {src ? <figure style={{textAlign: props.align}}>
        <img src={src} alt={name} style={imgStyle}
          onLoad={e => imgLoaded(e)} 
          onChange={e => imgLoaded(e)} 
          className="img-upload" />
      </figure> : ""}

      <input 
        type="file" 
        className="form-control"
        onChange={upload}
      />
      
      <button type="submit" className="btn btn-outline-primary">Done</button>
      <button type="reset" className="btn btn-outline-secondary">Cancel</button>
      { props.ele ? 
        <button type="button" className="btn btn-outline-danger" onClick={props?.remove}>
          Remove
        </button> : ""}
    </form>
  );
  
}
  
export default ImageForm;