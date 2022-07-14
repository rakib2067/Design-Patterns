import { Memento } from "./Memento";

export class Editor implements Memento{
    prevState: string []=[]
    constructor(private _content:string){}

    get content(){
        return this._content
    }
    set content(input:string){
        this.prevState.push(this._content)
        this._content=input;
    }

    undo(): void {
        if(this.prevState.length===0)
        return
        else
        this._content=this.prevState[this.prevState.length-1]
        this.prevState.pop();
    }

}


const editor= new Editor('First');

editor.content="Second"
editor.content="Third"
console.log(editor.content)

editor.undo()
editor.undo();

console.log(editor.content)
