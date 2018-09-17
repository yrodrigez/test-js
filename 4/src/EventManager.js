export default class EventManager {
    constructor(events, types) {
        this.events = events;
        this.types = types
    }

    run() {
        this.events.forEach(e => {
            if (this.types.find(t => t === e.type))
                console.log(e.toString())
        })
    }
};