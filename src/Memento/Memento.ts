export class EditorState{
    constructor(private readonly _content: string){}

    get content(){
        return this._content
    }
}


// Memento class to save previous states
export class Memento{
    //Contains same fields as our originator
    constructor(private readonly _content: string,private readonly _fontName:string,private readonly _fontSize: number,){}

    get content(){
        return this._content;
    }
    get fontName(){
        return this._fontName;
    }
    get fontSize(){
        return this._fontSize;
    }
}