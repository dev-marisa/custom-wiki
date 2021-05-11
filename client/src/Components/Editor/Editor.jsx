import React, { useState } from 'react';
import AddSection from './AddSection';


const Editor = props => {
  const [content, setContent] = useState([]);
  
  const addSection = (index, ele) => {
    const temp = [...content];
    temp.splice(index+1, 0, ele);
    setContent(temp);
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