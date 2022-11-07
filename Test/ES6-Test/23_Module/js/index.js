import Person, {StateFaild, StateSucceess} from './base.js'

class Programmer extends Person {
    constructor(name, age) {super(name, age);}
}

const programmer = new Programmer('baci', 18);
programmer.speak();
Programmer.say();

console.log(StateFaild, StateSucceess);