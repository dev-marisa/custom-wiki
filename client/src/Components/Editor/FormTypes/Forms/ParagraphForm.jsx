import React, { useRef } from 'react';
import { ParagraphModel } from './models';

const ParagraphForm = props => {

  const editorEl = useRef(null);

  const done = e => {
    e.preventDefault();
    props.done(new ParagraphModel(props.tag, editorEl.current.innerHTML, props.align, "", "", ""));
  }

  const cancel = e => {
    e.preventDefault();
    props.cancel();
  }

  return (
    <form onSubmit={done} onReset={cancel}>
      <p id="editor-p" contentEditable="true"
        ref={editorEl}
        style={{
          width: "100%",
          minHeight: "50px",
          boxSizing: "border-box",
          outline: "2px dashed #ccc",
          padding: "20px",
          textAlign: props.align
        }}></p>
      <button type="submit" className="btn btn-outline-primary">Done</button>
      <button type="reset" className="btn btn-outline-secondary">Cancel</button>
    </form>
  );

}

export default ParagraphForm;