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
