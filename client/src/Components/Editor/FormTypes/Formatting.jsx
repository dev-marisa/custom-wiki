import React from 'react';
import Button from './Button';

const Formatting = props => {

  const apply = type => {
    const selection = window.getSelection();
    console.log(type);
    console.log(selection);
    let parent = selection.anchorNode;
    if(parent.nodeName === "#text") {
      parent = parent.parentElement;
    }
    let line = selection.anchorNode.textContent;
    let st = Math.min(selection.anchorOffset, selection.focusOffset);
    let ed = Math.max(selection.anchorOffset, selection.focusOffset);
    let newNode = document.createElement(type);
    newNode.appendChild(document.createTextNode(line.substring(st, ed)));
    let nodes = [
      document.createTextNode(line.substring(0, st)),
      newNode,
      document.createTextNode(line.substring(ed, line.length))
    ];
    parent.replaceChild(nodes[0], selection.anchorNode);
    nodes[0].after(nodes[1]);
    nodes[1].after(nodes[2]);
  }

  return (
    <div className="d-flex flex-wrap justify-content-center">
      <div className="border p5">
        <div className="form-text mt0">Layout</div>
        <div className="btn-group">
          <Button active={props.tag === "columns"} tooltip="Columns">
            <i className="fas fa-columns"></i>
          </Button>
          <Button active={props.tag === "table"} tooltip="Table" click={e => props.setTag("table")}>
            <i className="fas fa-table"></i>
          </Button>
          <Button active={props.tag === "ul"} tooltip="Unordered List" click={e => props.setTag("ul")}>
            <i className="fas fa-list-ul"></i>
          </Button>
          <Button active={props.tag === "ol"} tooltip="Ordered List" click={e => props.setTag("ol")}>
            <i className="fas fa-list-ol"></i>
          </Button>
          <Button active={false} tooltip="Indent">
            <i className="fas fa-indent"></i>
          </Button>
          <Button active={false} tooltip="Outdent">
            <i className="fas fa-outdent"></i>
          </Button>
        </div>
      </div>
      <div className="border p5">
        <div className="form-text mt0">Type</div>
        <div className="btn-group">
          <Button active={props.tag === "h1"} tooltip="Title" click={e => props.setTag("h1")}>
            <i className="fas fa-heading"></i>&nbsp;<strong>1</strong>
          </Button>
          <Button active={props.tag === "h2"} tooltip="Subtitle" click={e => props.setTag("h2")}>
            <i className="fas fa-heading"></i>&nbsp;<strong>2</strong>
          </Button>
          <Button active={props.tag === "h3"} tooltip="Heading" click={e => props.setTag("h3")}>
            <i className="fas fa-heading"></i>&nbsp;<strong>3</strong>
          </Button>
          <Button active={props.tag === "h4"} tooltip="Subheading" click={e => props.setTag("h4")}>
            <i className="fas fa-heading"></i>&nbsp;<strong>4</strong>
          </Button>
          <Button active={props.tag === "p"} tooltip="Paragraph" click={e => props.setTag("p")}>
            <i className="fas fa-paragraph"></i>
          </Button>
          <Button active={props.tag === "img"} tooltip="Image" click={e => props.setTag("img")}>
            <i className="far fa-image"></i>
          </Button>
          <Button active={props.tag === "file"} tooltip="File Download" click={e => props.setTag("file")}>
            <i className="fas fa-file-download"></i>
          </Button>
          <Button active={props.tag === "embed"} tooltip="Embed" click={e => props.setTag("embed")}>
            <i className="far fa-play-circle"></i>
          </Button>
          <Button active={props.tag === "pre"} tooltip="Code Block" click={e => props.setTag("pre")}>
            <i className="fas fa-code"></i>
          </Button>
          <Button active={props.tag === "blockquote"} tooltip="Quote" click={e => props.setTag("blockquote")}>
            <i className="fas fa-quote-left"></i>
          </Button>
        </div>
      </div>
      <div className="border p5">
        <div className="form-text mt0">Align</div>
        <div className="btn-group">
          <Button active={props.align === "left"} tooltip="Align Left" click={e => props.setAlign("left")}>
            <i className="fas fa-align-left"></i>
          </Button>
          <Button active={props.align === "center"} tooltip="Center Text" click={e => props.setAlign("center")}>
            <i className="fas fa-align-center"></i>
          </Button>
          <Button active={props.align === "right"} tooltip="Align Right" click={e => props.setAlign("right")}>
            <i className="fas fa-align-right"></i>
          </Button>
          <Button active={props.align === "justify"} tooltip="Justify Text" click={e => props.setAlign("justify")}>
            <i className="fas fa-align-justify"></i>
          </Button>
        </div>
      </div>
      <div className="border p5">
        <div className="form-text mt0">Font</div>
        <div className="btn-group">
          <Button active={false} tooltip="Bold" click={e => apply("strong")}>
            <i className="fas fa-bold"></i>
          </Button>
          <Button active={false} tooltip="Italic" click={e => apply("em")}>
            <i className="fas fa-italic"></i>
          </Button>
          <Button active={false} tooltip="Underline" click={e => apply("u")}>
            <i className="fas fa-underline"></i>
          </Button>
          <Button active={false} tooltip="Font">
            <i className="fas fa-font"></i>
          </Button>
          <Button active={false} tooltip="Icon">
            <i className="far fa-flag"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Formatting;