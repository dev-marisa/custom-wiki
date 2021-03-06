import React, { useRef, useEffect } from 'react';
import { BlockquoteModel } from './models';


// basically a glorified paragraph...
const BlockquoteForm = props => {

  const editorEl = useRef(null);

  const done = e => {
    e.preventDefault();
    // makes sense to give it the blockquote css class by default
    props.done(new BlockquoteModel(props.tag, editorEl.current.innerHTML, props.align, "", "", "blockquote"));
  }

  const cancel = e => {
    e.preventDefault();
    props.cancel();
  }

  useEffect(() => {
    if(props.ele) {
      editorEl.current.innerHTML = props.ele.content;
    } else {
      let p = document.createElement("p");
      p.appendChild(document.createTextNode("Your quote here"));
      editorEl.current.appendChild(p);
      editorEl.current.focus();
    }
  }, [props.tag]);

  return (
    <form onSubmit={done} onReset={cancel}>
      <blockquote 
        id="editor-blockquote"
        className="blockquote"
        ref={editorEl} 
        contentEditable="true" 
        style={{
          outline: "2px dashed #ccc",
          padding: "20px",
          textAlign: props.align
        }}
      ></blockquote>
      <button type="submit" className="btn btn-outline-primary">Done</button>
      <button type="reset" className="btn btn-outline-secondary">Cancel</button>
      { props.ele ? 
        <button type="button" className="btn btn-outline-danger" onClick={props?.remove}>
          Remove
        </button> : ""}
    </form>
  );

}

export default BlockquoteForm;