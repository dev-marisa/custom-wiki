import React, { useRef, useEffect, useState } from 'react';
import { TableModel } from './models';


// helper to generate the table 
function createTableMarkUp(cols, rows) {
  let res = "<thead>";
  for(let i=0; i<rows; i++) {
    res += "<tr>";
    for(let j=0; j<cols; j++) {
      res += "<td><br></td>";
    }
    res += "</tr>";
  }
  return res + "</thead>";
}

function getValues(markup) {
  // console.log(markup);
  if(markup.length < 1) {
    return;
  }
  const trRegex = /<tr>(.*?)<\/tr>/;
  const tdRegex = /<td>(.*?)<\/td>/;
  const values = [];
  for(let row of markup.match(trRegex)) { 
    let rowVals = [];
    console.log(row);
    for(let col of row.match(tdRegex)) {
      rowVals.push(col);
    }
    values.push(rowVals);
  }
  return values;
}

// lists are not as involved as I expected
const TableForm = props => {

  const editorEl = useRef(null);
  const [rows, setRows] = useState(1);
  const [cols, setCols] = useState(3);

  const done = e => {
    e.preventDefault();
    console.log(editorEl.current.innerHTML);
    // I'll be applying the table and table-bordered classes by default
    props.done(new TableModel(props.tag, editorEl.current.innerHTML, "", "", "table table-bordered"));
  }

  const cancel = e => {
    e.preventDefault();
    props.cancel();
  }

  useEffect(() => {
    if(props.ele) {
      editorEl.current.innerHTML = props.ele.content;
    } else {
      let prev = editorEl.current.innerHTML;
      console.log(getValues(prev));
      editorEl.current.innerHTML = createTableMarkUp(cols, rows);
    }
  }, [rows, cols])

  return (
    <form onSubmit={done} onReset={cancel} className="p-3">
      <div className="row my-3">
        <div className="col input-group">
          <span className="input-group-text">Rows</span>
          <input type="number" min="1" value={rows} onChange={e => setRows(e.target.value)} className="form-control" />
        </div>
        <div className="col input-group">
          <span className="input-group-text">Columns</span>
          <input type="number" min="1" value={cols} onChange={e => setCols(e.target.value)} className="form-control" />
        </div>
      </div>
      <table id="editor-table" className="table table-bordered" contentEditable="true" ref={editorEl}></table>
      <button type="submit" className="btn btn-outline-primary">Done</button>
      <button type="reset" className="btn btn-outline-secondary">Cancel</button>
      { props.ele ? 
        <button type="button" className="btn btn-outline-danger" onClick={props?.remove}>
          Remove
        </button> : ""}
    </form>
  );

}

export default TableForm;