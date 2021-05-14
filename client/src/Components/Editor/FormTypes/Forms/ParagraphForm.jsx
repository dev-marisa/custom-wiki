import React, { useRef, useEffect } from 'react';
import { ParagraphModel } from './models';


// paragraphs are not as involved as I expected
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

  useEffect(() => {
    if(props.ele) {
      editorEl.current.innerHTML = props.ele.content;
    }
  }, [props.tag]);

  const keypress = e => {
    console.log(e);
    if(e.keyCode === 9) {
      e.preventDefault();
      // Tab should add 4 spaces to the current line
      const selection = window.getSelection();
      console.log(selection);
      if(selection.anchorNode !== selection.focusNode) {
        // TODO: allow indenting multiple lines
        return;
      } else {
        let start = Math.min(selection.anchorOffset, selection.focusOffset);
        let text = selection.focusNode.nodeValue;
        let newText = text.substring(0, start) + "    " + text.substring(start, text.length);
        selection.focusNode.nodeValue = newText;
      }
    }
    // these are the arrow keys
    // if([37, 38, 39, 40].includes(e.keyCode) {
    //   // TODO: check the cursor position
    // }
  }

  useEffect(() => {
    editorEl.current.appendChild(document.createTextNode(""));
    editorEl.current.focus();
  }, [props.tag]);

  return (
    <form onSubmit={done} onReset={cancel}>
      <p id="editor-p" contentEditable="true"
        ref={editorEl}
        onKeyDown={keypress}
        style={{
          width: "100%",
          minHeight: "50px",
          boxSizing: "border-box",
          outline: "2px dashed #ccc",
          padding: "20px",
          whiteSpace: "pre",
          overflowWrap: "anywhere",
          textAlign: props.align
        }}></p>
      <button type="submit" className="btn btn-outline-primary">Done</button>
      <button type="reset" className="btn btn-outline-secondary">Cancel</button>
      { props.ele ? 
        <button type="button" className="btn btn-outline-danger" onClick={props?.remove}>
          Remove
        </button> : ""}
    </form>
  );

}

export default ParagraphForm;