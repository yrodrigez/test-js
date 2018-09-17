import EventManager from './EventManager';
import Event from './Event';

export default class EventManagerFactory{
    static create(events, types) {
        return new EventManager((events||[]).map(x => new Event(x)), [...types]);
    }
};