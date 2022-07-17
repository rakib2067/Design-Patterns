export class EditorState{
    constructor(private readonly _content: string){}

    get content(){
        return this._content
    }
}