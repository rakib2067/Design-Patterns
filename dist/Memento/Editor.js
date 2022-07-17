"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = void 0;
const Memento_1 = require("./Memento");
class Editor {
    get content() {
        return this._content;
    }
    set content(input) {
        this._content = input;
    }
    createState() {
        return new Memento_1.EditorState(this._content);
    }
    restore(state) {
        this._content = state.content;
    }
}
exports.Editor = Editor;
//# sourceMappingURL=Editor.js.map