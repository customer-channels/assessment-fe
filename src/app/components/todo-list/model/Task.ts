export class Task {

    constructor (text:string, checked:boolean) {
        this.text = text;
        this.checked = checked;
    }
    
    id: number;
    text: string;
    checked: boolean;
}