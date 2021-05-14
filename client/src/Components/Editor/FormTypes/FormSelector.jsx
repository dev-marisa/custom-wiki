import React, { useEffect, useState } from 'react';
import Formatting from './Formatting';
import Match from './Match';
import HeadingForm from './Forms/HeadingForm';
import ImageForm from './Forms/ImageForm';
import ParagraphForm from './Forms/ParagraphForm';
import BlockquoteForm from './Forms/BlockquoteForm';
import EmbedForm from './Forms/EmbedForm';
import ListForm from './Forms/ListForm';
import TableForm from './Forms/TableForm';


// When the user is editing a section, what is the type of form to display
const FormSelector = props => {

  const [tag, setTag] = useState("h1");
  const [align, setAlign] = useState("left");

  const done = data => props.done(data);
  const cancel = data => props.cancel();

  useEffect( () => {
    console.log(tag);
  }, [tag]);

  // Match will display the child node if the tag matches the pattern
  return (
    <div className="outline-grey">

      {/* pick the tag type and the align type here */}
      {/* also select bold, italics, underline */}
      <Formatting tag={tag} setTag={setTag} align={align} setAlign={setAlign} />

      {/* h1 -> h6 can all use the same form */}
      <Match tag={tag} pattern={/^(h)(1|2|3|4|5|6)$/}>
        <HeadingForm tag={tag} align={align} done={done} cancel={cancel} />
      </Match>

      {/* img tags will be contained in a <figure> */}
      <Match tag={tag} pattern={/^(img)$/}>
        <ImageForm tag={tag} align={align} done={done} cancel={cancel} />
      </Match>

      {/* p tags can have a lot of nested children like: */}
      {/* a, code, strong, em, u */}
      {/* for simplicity I'll make it so it only goes one element deeper */}
      <Match tag={tag} pattern={/^(p)$/}>
        <ParagraphForm tag={tag} align={align} done={done} cancel={cancel} />
      </Match>

      {/* basically the same as a paragraph to be honest */}
      <Match tag={tag} pattern={/^(blockquote)$/}>
        <BlockquoteForm tag={tag} align={align} done={done} cancel={cancel} />
      </Match>

      {/* a vimeo or youtube embed link can be used easily enough */}
      <Match tag={tag} pattern={/^(iframe)$/}>
        <EmbedForm tag={tag} done={done} cancel={cancel} />
      </Match>

      {/* really ordered and unordered lists work about the same way */}
      <Match tag={tag} pattern={/^(o|u)l$/}>
        <ListForm tag={tag} done={done} cancel={cancel} />
      </Match>

      <Match tag={tag} pattern={/^(table)$/}>
        <TableForm tag={tag} done={done} cancel={cancel} />
      </Match>

      <Match tag={tag} pattern={/^(file)$/}>
        <p className="text-primary text-center py-3">TODO: "{tag}" not implemented</p>
      </Match>

      <Match tag={tag} pattern={/^(pre)$/}>
        <p className="text-primary text-center py-3">TODO: "{tag}" not implemented</p>
      </Match>

    </div>
  );

}

export default FormSelector;
