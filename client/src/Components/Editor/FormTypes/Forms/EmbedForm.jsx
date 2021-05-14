import React, { useState, useEffect } from 'react';
import { EmbedModel } from './models';


// pretty basic form
// embed will be like an iframe from youtube or vimeo
const EmbedForm = props => {

  const [text, setText] = useState("");

  const done = e => {
    e.preventDefault();
    props.done(new EmbedModel(props.tag, text));
  }

  const cancel = e => {
    e.preventDefault();
    props.cancel();
  }

  useEffect(() => {
    if(props.ele) {
      setText(props.ele.content);
    }
  }, [props.tag]);

  return (
    <>
      <div className="content-section" 
              dangerouslySetInnerHTML={{__html: text}} />
      <form onSubmit={done} onReset={cancel}>
        <textarea 
          className="form-control"
          style={{resize: "none"}}
          placeholder="Paste the embed link here" 
          onChange={e => setText(e.target.value)} 
          value={text} />
        <button type="submit" className="btn btn-outline-primary">Done</button>
        <button type="reset" className="btn btn-outline-secondary">Cancel</button>
      </form>
    </>
  );

}

export default EmbedForm;