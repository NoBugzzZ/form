class EventBusMain {
    constructor() {
        this.listener = {};
        this.formdata = {};
    }

    subscribe(events, callback) {
        events.forEach(event => {
            if (!this.listener[event]) {
                this.listener[event] = [];
            }
            this.listener[event].push({ events, callback });
        })
    }

    publish(event, data) {
        this.formdata[event] = data;
        const registers = this.listener[event];
        if (registers) {
            registers.forEach((register) => {
                const { events, callback } = register;
                callback(...events.map(event => {
                    return this.formdata[event];
                }));
                
            });
        }
    }
}

const EvenBus = new EventBusMain()

export { EvenBus };

