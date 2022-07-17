"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memento = exports.EditorState = void 0;
class EditorState {
    constructor(_content) {
        this._content = _content;
    }
    get content() {
        return this._content;
    }
}
exports.EditorState = EditorState;
class Memento {
    constructor(_content, _fontName, _fontSize) {
        this._content = _content;
        this._fontName = _fontName;
        this._fontSize = _fontSize;
    }
    get content() {
        return this._content;
    }
    get fontName() {
        return this._fontName;
    }
    get fontSize() {
        return this._fontSize;
    }
}
exports.Memento = Memento;
//# sourceMappingURL=Memento.js.map