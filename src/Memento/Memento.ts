export interface Memento{
    prevState: string[];
    undo():void;
}