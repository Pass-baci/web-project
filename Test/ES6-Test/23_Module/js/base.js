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

export default Person;