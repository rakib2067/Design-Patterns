import { EditorState } from "./Memento";


export class Editor{
    private _content!: string ;

    get content(){
        return this._content
    }
    set content(input:string){
        this._content=input;
    }

    createState(){
        return new EditorState(this._content)
    }

    //sets content based on content of the passed editorState, which will have been popped from the 
    restore(state: EditorState){
        this._content=state.content;
    }
}
















//My Implementation


// export class Editor implements Memento{
//     prevState: string []=[]
//     constructor(private _content:string){}

//     get content(){
//         return this._content
//     }
//     set content(input:string){
//         this.prevState.push(this._content)
//         this._content=input;
//     }

//     undo(): void {
//         if(this.prevState.length===0)
//         return
//         else
//         this._content=this.prevState[this.prevState.length-1]
//         this.prevState.pop();
//     }

// }


// const editor= new Editor('First');

// editor.content="Second"
// editor.content="Third"
// console.log(editor.content)

// editor.undo()
// editor.undo();

// console.log(editor.content)
