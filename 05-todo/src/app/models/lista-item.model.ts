export class ListaItem {
    desc: string;
    done: boolean;
    constructor(desc: string) {
        this.desc = desc;
        this.done = false;  
    }
}