import React, { useRef } from 'react';
import Button from '../Button';

const ParagraphForm = props => {

  const editorEl = useRef(null);

  const done = e => {
    e.preventDefault();
  }

  const cancel = e => {
    e.preventDefault();
    props.cancel();
  }

  return (
    <>
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
    </>
  );

}

export default ParagraphForm;