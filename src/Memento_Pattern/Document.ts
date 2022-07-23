import { Memento } from "./Memento";

export class Document {
    private _content!:string;
    private  _fontName!:string;
    private  _fontSize!:number;

    get content() {
        return this._content;
    }

    set content(content: string) {
        this._content = content;
    }

    get fontName() {
        return this._fontName;
    }

    set fontName(fontName:string) {
        this._fontName = fontName;
    }

    get fontSize() {
        return this._fontSize;
    }

    set fontSize(fontSize:number) {
        this._fontSize = fontSize;
    }

    createState(){
        return new Memento(this._content,this._fontName,this._fontSize)
    }

    restore({content,fontName,fontSize}: Memento){
        this._content= content;
        this._fontName=fontName;
        this._fontSize=fontSize;;
    }
    
    toString(): string {
        return "Document{" +
                "content='" + this._content + '\'' +
                ", fontName='" + this._fontName + '\'' +
                ", fontSize=" + this._fontSize +
                '}';
    }
}
