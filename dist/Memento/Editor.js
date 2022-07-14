"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = void 0;
class Editor {
    constructor(_content) {
        this._content = _content;
        this.prevState = [];
    }
    get content() {
        return this._content;
    }
    set content(input) {
        this.prevState.push(this._content);
        this._content = input;
    }
    undo() {
        if (this.prevState.length === 0)
            return;
        else
            this._content = this.prevState[this.prevState.length - 1];
        this.prevState.pop();
    }
}
exports.Editor = Editor;
const editor = new Editor('First');
editor.content = "Second";
editor.content = "Third";
console.log(editor.content);
editor.undo();
editor.undo();
console.log(editor.content);
//# sourceMappingURL=Editor.js.map