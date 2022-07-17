"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
const Memento_1 = require("./Memento");
class Document {
    get content() {
        return this._content;
    }
    set content(content) {
        this._content = content;
    }
    get fontName() {
        return this._fontName;
    }
    set fontName(fontName) {
        this._fontName = fontName;
    }
    get fontSize() {
        return this._fontSize;
    }
    set fontSize(fontSize) {
        this._fontSize = fontSize;
    }
    createState() {
        return new Memento_1.Memento(this._content, this._fontName, this._fontSize);
    }
    restore({ content, fontName, fontSize }) {
        this._content = content;
        this._fontName = fontName;
        this._fontSize = fontSize;
        ;
    }
    toString() {
        return "Document{" +
            "content='" + this._content + '\'' +
            ", fontName='" + this._fontName + '\'' +
            ", fontSize=" + this._fontSize +
            '}';
    }
}
exports.Document = Document;
//# sourceMappingURL=Document.js.map