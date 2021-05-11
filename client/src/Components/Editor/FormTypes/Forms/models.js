// front end models so I can keep the type of data I'm working with straight
// but as Lilith says "I hate anything straight" 
// really I just need the markup so it can be displayed but I guess I have
// higher ambitions for what we'll store in the DB
// each class will have an _html() method to retrieve the markup


// remove excess spaces in the _html
String.prototype.formatSpace = function() {
    let res = "", prev = null;
    for(let letter of this) {
        if(letter !== " " || prev !== " ") {
            res += letter;
        }
        prev = letter;
    }
    return res;
}

// class for sections containing a paragraph
// going to just store the content as a string ¯\_(ツ)_/¯
// this is pretty much the same as header but I can do something 
// different with it later maybe
export class ParagraphModel {

    constructor(tagName, content, align, style, id, classes) {
        this.tagName = tagName;
        this.content = content;
        this.align = align;
        this.style = style;
        this.id = id;
        this.classes = classes;
    }

    _html() {
        let _id, _class, _style, _align;
        this.id ? _id = `id="${this.id}"` : _id = "";
        this.classes ? _class = `class="${this.classes}"` : _class = "";
        this.align ? _align = `text-align:${this.align};` : _align = "";
        _style = `style="${_align+this.style}"`;
        return `<${this.tagName} ${_id} ${_class} ${_style}>${this.content}</${this.tagName}>`.formatSpace();
    }

}

// class for sections containing an header
// like: h1, h2, h3, h4...
export class HeaderModel {

    constructor(tagName, text, align, style, id, classes){
        this.tagName = tagName;
        this.text = text;
        this.align = align;
        this.style = style;
        this.id = id;
        this.classes = classes;
    }

    _html() {
        let _id, _class, _style, _align;
        this.id ? _id = `id="${this.id}"` : _id = "";
        this.classes ? _class = `class="${this.classes}"` : _class = "";
        this.align ? _align = `text-align:${this.align};` : _align = "";
        _style = `style="${_align+this.style}"`;
        return `<${this.tagName} ${_id} ${_class} ${_style}>${this.text}</${this.tagName}>`.formatSpace();
    }

}

// class for sections containing an image
export class ImageModel {

    constructor(tagName, filename, src, alt, height, width, align, caption, style, id, classes){
        this.tagName = tagName;
        this.filename = filename;
        this.src = src;
        this.alt = alt;
        this.height = height;
        this.width = width;
        this.align = align;
        this.caption = caption;
        this.style = style;
        this.id = id;
        this.classes = classes;
    }

    _html() {
        let _id, _class, _style, _align;
        this.id ? _id = `id="${this.id}"` : _id = "";
        this.classes ? _class = `class="${this.classes}"` : _class = "";
        this.style ? _style = `style="${this.style}"` : _style = "";
        this.align ? _align = `style="text-align: ${this.align}";` : _align = "";
        return `<figure ${_align} >
            <img src="${this.src}" alt="${this.alt}" ${_id} ${_class} ${_style} />
        </figure>`.formatSpace();
    }

}

// class for sections containing embed code
// typically an iframe from youtube or vimeo
export class EmbedModel {

    constructor(tagName, content) {
        this.tagName = tagName;
        this.content = content;
    }

    // don't really need to do anything with this one!
    _html() {
        return this.content;
    }

}

// class for sections containing blockquotes
// pretty identical to paragraphs
export class BlockquoteModel {

    constructor(tagName, content, align, style, id, classes) {
        this.tagName = tagName;
        this.content = content;
        this.align = align;
        this.style = style;
        this.id = id;
        this.classes = classes;
    }

    _html() {
        let _id, _class, _style, _align;
        this.id ? _id = `id="${this.id}"` : _id = "";
        this.classes ? _class = `class="${this.classes}"` : _class = "";
        this.align ? _align = `text-align:${this.align};` : _align = "";
        _style = `style="${_align+this.style}"`;
        return `<${this.tagName} ${_id} ${_class} ${_style}>${this.content}</${this.tagName}>`.formatSpace();
    }

}

// list model for ul and ol
// similar to paragraphs and blockquotes
// didn't make sense to apply align on this one
// maybe I'll change my mind we'll see!
export class ListModel {

    constructor(tagName, content, style, id, classes) {
        this.tagName = tagName;
        this.content = content;
        this.style = style;
        this.id = id;
        this.classes = classes;
    }

    _html() {
        let _id, _class, _style;
        this.id ? _id = `id="${this.id}"` : _id = "";
        this.classes ? _class = `class="${this.classes}"` : _class = "";
        _style = `style="${this.style}"`;
        return `<${this.tagName} ${_id} ${_class} ${_style}>${this.content}</${this.tagName}>`.formatSpace();
    }

}
