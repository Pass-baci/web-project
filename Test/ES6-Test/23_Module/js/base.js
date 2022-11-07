class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(`your name is ${name}, your age is ${age}`);
    }
    speak() {
        console.log('Person speak');
    }
    static say() {
        console.log('Person speak');
    }
}

const StateFaild = 1;
const StateSucceess = 1;

export {StateFaild, StateSucceess};

export default Person;