import React, { useRef, useEffect } from 'react';
import { ListModel } from './models';

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

  // add the first li into the list so the user can begin editing?
  // this seems to work 
  useEffect(() => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("your list here"));
    editorEl.current.appendChild(li);
  }, [props.tag]);

  return (
    <form onSubmit={done} onReset={cancel}>
      {props.tag === "ul" ? <ul id="editor-ul" contentEditable="true"
        ref={editorEl} style={listStyle}></ul> : "" }
      {props.tag === "ol" ? <ol id="editor-ul" contentEditable="true"
        ref={editorEl} style={listStyle}></ol> : "" }
      <button type="submit" className="btn btn-outline-primary">Done</button>
      <button type="reset" className="btn btn-outline-secondary">Cancel</button>
    </form>
  );

}

export default ListForm;