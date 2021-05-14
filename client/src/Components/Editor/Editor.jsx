import React, { useEffect, useState } from 'react';
import AddSection from './AddSection';
import ShowSection from './ShowSection';

// this is displaying everything? really?
const Editor = props => {

  // all of the content on the page will be stored inside this list
  // we can get the markup by just looping and calling _html()
  const [content, setContent] = useState([]);
  const [preview, setPreview] = useState(true);

  // eventually we'll want to save thes data 
  // and get redirected to a different module
  const save = e => console.log(e);
  
  // adds a new section into the page, nifty!
  const addSection = (index, ele) => {
    const temp = [...content];
    temp.splice(index+1, 0, ele);
    setContent(temp);
  }

  // just uh, swap out the element, should be alright!
  // sometimes deeply nested changes aren't seen though...
  const updateSection = (index, ele) => {
    const temp = [...content];
    temp[index] = ele;
    setContent(temp);
  }

  const removeSection = (index) => {
    console.log("to remove", index);
    const temp = [...content];
    temp.splice(index, 1);
    setContent(temp);
  }

  return (
    <>
      <h1 className="bg-dark text-light p-3">Wiki Editor</h1>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" 
          id="preview-select" defaultChecked={preview} 
          onChange={e => setPreview(!preview)} />
        <label className="form-check-label" 
          htmlFor="preview-select">
            {preview ? "Preview Page" : "Edit Page"}
        </label>
      </div>
      { preview ? <AddSection index={-1} addSection={addSection} /> : "" }
      { content.map( (ele, i) => <div key={i}>
          <ShowSection index={i} ele={ele} updateSection={updateSection} remove={removeSection} preview={preview} />
          { preview ? <AddSection index={i} addSection={addSection} /> : "" }
        </div>
      )}
    </>
  );
}

export default Editor;