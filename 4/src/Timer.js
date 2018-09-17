let instance = null;

class Timer {
    constructor() {
        if (instance) return instance;
        this.time = 0;
        this.timer = setInterval(() => {
            this.time++;
            this.notifyAll();
        }, 1000);
        this.subscribers = [];

        instance = this;
        return instance;
    }

    destructor() {
        window.clearInterval(this.timer);
    }

    subscribe(cb) {
        this.subscribers.push(cb);
    }

    notifyAll() {
        this.subscribers.forEach(x => x.cb(this.time))
    }
}


export default Timer;