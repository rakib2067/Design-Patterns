import { Editor } from "./Editor";
import { History } from "./History";


let editor = new Editor();
let history = new History();

editor.content="First Post"
history.push(editor.createState())
editor.content="Second Post"
console.log(editor.content)

editor.restore(history.pop())



