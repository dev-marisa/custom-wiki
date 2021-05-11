import React, { useState } from 'react';
import FormSelector from './FormTypes/FormSelector';


const AddSection = props => {

  const [isEditing, setIsEditing] = useState(false);

  const done = data => {
    props.addSection(props.index, data);
    setIsEditing(false);
  }

  const cancel = data => {
    setIsEditing(false);
  }

  return (
    <>
      { 
        isEditing ? 
        <FormSelector done={done} cancel={cancel} /> : 
        <div className="add-section" onClick={e => setIsEditing(true)}>
          + Add Section
        </div> 
      }
    </>
  );
}

export default AddSection;
