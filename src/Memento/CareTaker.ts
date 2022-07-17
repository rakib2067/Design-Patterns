import { EditorState, Memento } from "./Memento";

export class History{
    private states: EditorState[]=[]

    push(state:EditorState){
         this.states.push(state)
    }
    pop(){
         return this.states.pop() as EditorState;
    }
}


//Caretaker/History class to track changes in our memento
//Able to push new changes to array as a memento object
//Able to remove last item from array 
export class CareTaker{
     private states: Memento[]=[];

     push(state:Memento){
          this.states.push(state)
     }
     pop(){
          return this.states.pop() as Memento;
     }
}