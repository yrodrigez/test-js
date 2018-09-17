export default class Event{
    constructor({name: message, type, second}){
        this.message = message;
        this.type = type;
        this.second = second;
    }

    toString(){
        return `At second ${this.second}: {type: "${this.type}", message: "${this.message}"}`
    }
};