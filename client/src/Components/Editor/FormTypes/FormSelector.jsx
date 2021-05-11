import React, { useEffect, useState } from 'react';
import Formatting from './Formatting';
import HeadingForm from './Forms/HeadingForm';
import ImageForm from './Forms/ImageForm';
import ParagraphForm from './Forms/ParagraphForm';

// Displays the children if they match the pattern
const Match = props => {
  return (
    props.pattern.test(props.tag.toLowerCase()) ? props.children : ""
  );
}

// selector to pick the type of form
const FormSelector = props => {

  const [tag, setTag] = useState("h1");
  const [align, setAlign] = useState("left");
  const [text, setText] = useState("");

  const done = data => {
    props.done(data)
  }

  const cancel = data => {
    props.cancel();
  }

  useEffect( () => {
    console.log(tag);
  }, [tag]);

  return (
    <div className="outline-grey">

      {/* pick the tag type and the align type here */}
      <Formatting tag={tag} setTag={setTag} align={align} setAlign={setAlign} />

      <Match tag={tag} pattern={/^(p)$/}>
        {/* <p className="text-primary text-center py-3">TODO: "{tag}" not implemented</p> */}
        <ParagraphForm tag={tag} align={align} done={done} cancel={cancel} text={text} setText={setText} />
      </Match>

      <Match tag={tag} pattern={/^(table)$/}>
        <p className="text-primary text-center py-3">TODO: "{tag}" not implemented</p>
      </Match>

      <Match tag={tag} pattern={/^(ol)$/}>
        <p className="text-primary text-center py-3">TODO: "{tag}" not implemented</p>
      </Match>

      <Match tag={tag} pattern={/^(ul)$/}>
        <p className="text-primary text-center py-3">TODO: "{tag}" not implemented</p>
      </Match>

      <Match tag={tag} pattern={/^(file)$/}>
        <p className="text-primary text-center py-3">TODO: "{tag}" not implemented</p>
      </Match>

      <Match tag={tag} pattern={/^(embed)$/}>
        <p className="text-primary text-center py-3">TODO: "{tag}" not implemented</p>
      </Match>

      <Match tag={tag} pattern={/^(pre)$/}>
        <p className="text-primary text-center py-3">TODO: "{tag}" not implemented</p>
      </Match>

      <Match tag={tag} pattern={/^(blockquote)$/}>
        <p className="text-primary text-center py-3">TODO: "{tag}" not implemented</p>
      </Match>

      <Match tag={tag} pattern={/^(h)(1|2|3|4|5|6)$/}>
        <HeadingForm tag={tag} align={align} done={done} cancel={cancel} text={text} setText={setText} />
      </Match>

      <Match tag={tag} pattern={/^(img)$/}>
        <ImageForm tag={tag} align={align} done={done} cancel={cancel} />
      </Match>

    </div>
  );

}

export default FormSelector;
