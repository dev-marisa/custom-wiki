import React, { useEffect, useState } from 'react';
import FormSelector from './FormTypes/FormSelector';

import Formatting from './FormTypes/Formatting';
import Match from './FormTypes/Match';
import HeadingForm from './FormTypes/Forms/HeadingForm';
import ImageForm from './FormTypes/Forms/ImageForm';
import ParagraphForm from './FormTypes/Forms/ParagraphForm';
import BlockquoteForm from './FormTypes/Forms/BlockquoteForm';
import EmbedForm from './FormTypes/Forms/EmbedForm';
import ListForm from './FormTypes/Forms/ListForm';
import TableForm from './FormTypes/Forms/TableForm';


const EditSelector = props => {

  const [align, setAlign] = useState("left");

  const done = data => props.done(data);
  const cancel = data => props.cancel();

  return (
    <>
      <Formatting tag={props.ele.tagName} setTag={tag => console.log(tag)} align={align} setAlign={setAlign} />

      {/* h1 -> h6 can all use the same form */}
      <Match tag={props.ele.tagName} pattern={/^(h)(1|2|3|4|5|6)$/}>
        <HeadingForm tag={props.ele.tagName} align={align} done={done} cancel={cancel} ele={props.ele} />
      </Match>

      {/* img tags will be contained in a <figure> */}
      <Match tag={props.ele.tagName} pattern={/^(img)$/}>
        <ImageForm tag={props.ele.tagName} align={align} done={done} cancel={cancel} ele={props.ele} />
      </Match>

      {/* p tags can have a lot of nested children like: */}
      {/* a, code, strong, em, u */}
      {/* for simplicity I'll make it so it only goes one element deeper */}
      <Match tag={props.ele.tagName} pattern={/^(p)$/}>
        <ParagraphForm tag={props.ele.tagName} align={align} done={done} cancel={cancel} ele={props.ele} />
      </Match>

      {/* basically the same as a paragraph to be honest */}
      <Match tag={props.ele.tagName} pattern={/^(blockquote)$/}>
        <BlockquoteForm tag={props.ele.tagName} align={align} done={done} cancel={cancel} ele={props.ele} />
      </Match>

      {/* a vimeo or youtube embed link can be used easily enough */}
      <Match tag={props.ele.tagName} pattern={/^(iframe)$/}>
        <EmbedForm tag={props.ele.tagName} done={done} cancel={cancel} ele={props.ele} />
      </Match>

      {/* really ordered and unordered lists work about the same way */}
      <Match tag={props.ele.tagName} pattern={/^(o|u)l$/}>
        <ListForm tag={props.ele.tagName} done={done} cancel={cancel} ele={props.ele} />
      </Match>

      <Match tag={props.ele.tagName} pattern={/^(table)$/}>
        <TableForm tag={props.ele.tagName} done={done} cancel={cancel} ele={props.ele} />
      </Match>

      <Match tag={props.ele.tagName} pattern={/^(file)$/}>
        <p className="text-primary text-center py-3">TODO: "{props.ele.tagName}" not implemented</p>
      </Match>

      <Match tag={props.ele.tagName} pattern={/^(pre)$/}>
        <p className="text-primary text-center py-3">TODO: "{props.ele.tagName}" not implemented</p>
      </Match>
    </>
  )

}


const ShowSection = props => {

  const [isHover, setIsHover] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const done = data => {
    console.log("done", data);
    props.updateSection(props.index, data);
    setIsEdit(false);
  }
  const cancel = e => setIsEdit(false);

  useEffect(() => {
    console.log(props.ele);
  }, [props]);

  return (
    <>
      { 
        isEdit ? 
        <EditSelector done={done} cancel={cancel} ele={props.ele} /> : 
        <div onMouseEnter={e => setIsHover(true)} onMouseLeave={e => setIsHover(false)} style={{display:"flex"}}>
          <div className="content-section" 
            dangerouslySetInnerHTML={{__html: props.ele._html()}} style={{flex:"1"}}/>
          { isHover ? <button className="btn btn-link" onClick={e => setIsEdit(true)}><i className="far fa-edit"></i></button> : ""}
        </div>
      }
    </>
  );

}

export default ShowSection;