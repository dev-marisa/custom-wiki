import React, { useRef, useEffect } from 'react';
import { BlockquoteModel } from './models';

const BlockquoteForm = props => {

  const editorEl = useRef(null);

  const done = e => {
    e.preventDefault();
    // makes sense to give it the blockquote class by default
    props.done(new BlockquoteModel(props.tag, editorEl.current.innerHTML, props.align, "", "", "blockquote"));
  }

  const cancel = e => {
    e.preventDefault();
    props.cancel();
  }

  useEffect(() => {
    let p = document.createElement("p");
    p.appendChild(document.createTextNode("Your quote here"));
    editorEl.current.appendChild(p);
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
    </form>
  );

}

export default BlockquoteForm;