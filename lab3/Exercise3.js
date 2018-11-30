var EventEmitter = require('events');

class Gym extends EventEmitter {
    constructor(){
    super();
      setInterval(() => this.emit('go'),1000);
    }
}
var thisGym = new Gym();
thisGym.on('go', () => console.log(`Athele is working out`));