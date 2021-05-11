import React, { useState } from 'react';
import AddSection from './AddSection';


// this is displaying everything? really?
const Editor = props => {

  // all of the content on the page will be stored inside this list
  // we can get the markup by just looping and calling _html()
  const [content, setContent] = useState([]);
  
  // adds a new section into the page, nifty!
  const addSection = (index, ele) => {
    const temp = [...content];
    temp.splice(index+1, 0, ele);
    setContent(temp);
  }

  // just uh, swap out the element, should be alright!
  // sometimes deeply nested changes aren't seen though...
  // TODO: reminder to test this actually works
  const updateSection = (index, ele) => {
    const temp = [...content];
    temp[index] = ele;
    setContent(temp);
  }

  const removeSection = (index) => {
    // TODO: what if we need to remove a section?
  }

  return (
    <>
      <h1 className="bg-dark text-light p-3">Wiki Editor</h1>
      <AddSection index={-1} addSection={addSection} />
      { content.map( (ele, i) => <div key={i}>
          <div className="content-section" 
            dangerouslySetInnerHTML={{__html: ele._html()}} />
          <AddSection index={i} addSection={addSection} />
        </div>
      )}
    </>
  );
}

export default Editor;