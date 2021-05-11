import React, { useState } from 'react';
import { EmbedModel } from './models';

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

  return (
    <>
      <div className="content-section" 
              dangerouslySetInnerHTML={{__html: text}} />
      <form onSubmit={done} onReset={cancel}>
        <textarea 
          className="form-control"
          style={{resize: "none"}}
          placeholder="Paste the embed link here" 
          onClick={e => setText(e.target.value)} />
        <button type="submit" className="btn btn-outline-primary">Done</button>
        <button type="reset" className="btn btn-outline-secondary">Cancel</button>
      </form>
    </>
  );

}

export default EmbedForm;