import { Document } from "./Document";
import { Editor } from "./Editor";
import { CareTaker, History } from "./CareTaker";


let document= new Document();
let careTaker=new CareTaker()
document.content="Lorem impsum dolor";
document.fontName="Inter";
document.fontSize=16;

careTaker.push(document.createState())
document.content="Changes"
document.fontName="Roboto"
document.fontSize=10;

console.log(document.toString())

document.restore(careTaker.pop())

console.log(document.toString())


let editor = new Editor();
let history = new History();

editor.content="First Post"
history.push(editor.createState())
editor.content="Second Post"
console.log(editor.content)

editor.restore(history.pop())



