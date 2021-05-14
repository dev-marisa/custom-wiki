import React, { useRef, useEffect } from 'react';
import { ListModel } from './models';


// lists are not as involved as I expected
const ListForm = props => {

  const editorEl = useRef(null);
  const listStyle = {
    width: "100%",
    minHeight: "50px",
    boxSizing: "border-box",
    outline: "2px dashed #ccc",
    padding: "20px"
  }

  const done = e => {
    e.preventDefault();
    console.log(editorEl.current.innerHTML);
    props.done(new ListModel(props.tag, editorEl.current.innerHTML, "", "", ""));
  }

  const cancel = e => {
    e.preventDefault();
    props.cancel();
  }

  // bunch of overly complicated code to deal with linebreaks
  const keypress = e => {
    const selection = window.getSelection();
    // prevent adding linebreaks above from backspacing
    if( e.keyCode === 8 && 
      selection.focusNode.nodeName === "LI" && 
      selection.focusNode === selection.focusNode.parentNode.firstChild) {
      e.preventDefault();
    }
    // the following key combinations should make a linebreak
    // enter + shift / control enter + shift / enter + shift alt
    if(e.keyCode === 13 && (e.shifKey || e.ctrlKey || e.altKey)) {
      e.preventDefault();
      if(selection.anchorNode !== selection.focusNode) {
        // TODO: allow indenting multiple lines
        return;
      } else {
        let start = Math.min(selection.anchorOffset, selection.focusOffset);
        let text = selection.focusNode.nodeValue;
        if(text) {
          let parent = selection.anchorNode;
          if(parent.nodeName === "#text") {
            parent = parent.parentElement;
          }
          let node1 = document.createTextNode(text.substring(0, start));
          let br = document.createElement("br");
          let node2 = document.createTextNode(text.substring(start, text.length))
          parent.replaceChild(node1, selection.anchorNode);
          node1.after(br);
          br.after(node2);
        }
      }
    }
    // Tab should maybe let us indent further
    // if(e.keyCode === 9) {
    //   e.preventDefault();
    // }
    // these are the arrow keys
    // if([37, 38, 39, 40].includes(e.keyCode) {
    //   // TODO: check the cursor position
    // }
  }

  // add the first li into the list so the user can begin editing?
  // this seems to work 
  useEffect(() => {
    if(props.ele) {
      editorEl.current.innerHTML = props.ele.content;
    } else {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode("your list here"));
      editorEl.current.appendChild(li);
    }
  }, [props.tag]);

  return (
    <form onSubmit={done} onReset={cancel}>
      {props.tag === "ul" ? <ul id="editor-ul" contentEditable="true"
        ref={editorEl} style={listStyle} onKeyDown={keypress}></ul> : "" }
      {props.tag === "ol" ? <ol id="editor-ul" contentEditable="true"
        ref={editorEl} style={listStyle} onKeyDown={keypress}></ol> : "" }
      <button type="submit" className="btn btn-outline-primary">Done</button>
      <button type="reset" className="btn btn-outline-secondary">Cancel</button>
      { props.ele ? 
        <button type="button" className="btn btn-outline-danger" onClick={props?.remove}>
          Remove
        </button> : ""}
    </form>
  );

}

export default ListForm;