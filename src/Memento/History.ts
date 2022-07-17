import { EditorState } from "./EditorState";

export class History{
    private states: EditorState[]=[]

    push(state:EditorState){
         this.states.push(state)
    }
    pop(){
         return this.states.pop() as EditorState;
    }
}
