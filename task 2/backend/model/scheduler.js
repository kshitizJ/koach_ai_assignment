class Scheduler {
    constructor() {
        this.events = [];
    }

    addEvent(newEvent) {
        const { start_time, end_time } = newEvent;

        // Check for overlaps
        for (let event of this.events) {
            if ((start_time < event.end_time && end_time > event.start_time)) {
                return false; // Overlap found
            }
        }

        // No overlap, add the event
        this.events.push({ start_time, end_time });
        return true;
    }

    getEvents() {
        return this.events;
    }
}

export default Scheduler;
