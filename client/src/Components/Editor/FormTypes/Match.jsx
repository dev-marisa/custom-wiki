import React from 'react';


// ehh... might as well be its own file?
// display the child node(s) if the pattern matches the tag
const Match = props => {
  return (
    props.pattern.test(props.tag.toLowerCase()) ? props.children : ""
  );
}

export default Match;