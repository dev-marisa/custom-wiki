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

  useEffect(() => {
    setAlign(props.ele.align);
  }, [props]);

  const done = data => props.done(data);
  const cancel = data => props.cancel();

  return (
    <>
      <Formatting tag={props.ele.tagName} setTag={tag => console.log(tag)} align={align} setAlign={setAlign} />

      {/* h1 -> h6 can all use the same form */}
      <Match tag={props.ele.tagName} pattern={/^(h)(1|2|3|4|5|6)$/}>
        <HeadingForm tag={props.ele.tagName} align={align} done={done} cancel={cancel} ele={props.ele} remove={props.remove} />
      </Match>

      {/* img tags will be contained in a <figure> */}
      <Match tag={props.ele.tagName} pattern={/^(img)$/}>
        <ImageForm tag={props.ele.tagName} align={align} done={done} cancel={cancel} ele={props.ele} remove={props.remove} />
      </Match>

      {/* p tags can have a lot of nested children like: */}
      {/* a, code, strong, em, u */}
      {/* for simplicity I'll make it so it only goes one element deeper */}
      <Match tag={props.ele.tagName} pattern={/^(p)$/}>
        <ParagraphForm tag={props.ele.tagName} align={align} done={done} cancel={cancel} ele={props.ele} remove={props.remove} />
      </Match>

      {/* basically the same as a paragraph to be honest */}
      <Match tag={props.ele.tagName} pattern={/^(blockquote)$/}>
        <BlockquoteForm tag={props.ele.tagName} align={align} done={done} cancel={cancel} ele={props.ele} remove={props.remove} />
      </Match>

      {/* a vimeo or youtube embed link can be used easily enough */}
      <Match tag={props.ele.tagName} pattern={/^(iframe)$/}>
        <EmbedForm tag={props.ele.tagName} done={done} cancel={cancel} ele={props.ele} remove={props.remove} />
      </Match>

      {/* really ordered and unordered lists work about the same way */}
      <Match tag={props.ele.tagName} pattern={/^(o|u)l$/}>
        <ListForm tag={props.ele.tagName} done={done} cancel={cancel} ele={props.ele} remove={props.remove} />
      </Match>

      <Match tag={props.ele.tagName} pattern={/^(table)$/}>
        <TableForm tag={props.ele.tagName} done={done} cancel={cancel} ele={props.ele} remove={props.remove} />
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

  const [isEdit, setIsEdit] = useState(false);

  const done = data => {
    console.log("done", data);
    props.updateSection(props.index, data);
    setIsEdit(false);
  }
  const cancel = e => setIsEdit(false);
  const remove = e => {
    props.remove(props.index);
    setIsEdit(false);
  }

  useEffect(() => {
    console.log(props.ele);
  }, [props]);

  return (
    <>
      { 
        isEdit ? 
        <EditSelector done={done} cancel={cancel} ele={props.ele} remove={remove} /> : 
        <div style={{display:"flex"}}>
          <div className="content-section" 
            dangerouslySetInnerHTML={{__html: props.ele._html()}} style={{flex:"1"}} />
          { props.preview ? 
            <button className="btn btn-link" onClick={e => setIsEdit(true)}>
              <i className="far fa-edit"></i>
            </button> : "" }
        </div>
      }
    </>
  );

}

export default ShowSection;