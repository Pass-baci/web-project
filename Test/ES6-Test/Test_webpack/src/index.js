import age from './module.js'
import css from "./file.css";
import "@babel/polyfill";

const logTest = ()=>{
    console.log('logTest6');
}

logTest();
console.log('index.js',age);
console.log(Array.from('abcd'));