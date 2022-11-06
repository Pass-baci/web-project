import Person from './base.js'

class Programmer extends Person {
    constructor(name, age) {super();}
}

const programmer = new Programmer('baci', 18);
programmer.speak();
Programmer.say();