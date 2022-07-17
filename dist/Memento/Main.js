"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Editor_1 = require("./Editor");
const History_1 = require("./History");
let editor = new Editor_1.Editor();
let history = new History_1.History();
editor.content = "First Post";
history.push(editor.createState());
editor.content = "Second Post";
console.log(editor.content);
editor.restore(history.pop());
//# sourceMappingURL=Main.js.map