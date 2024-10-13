import { processCommand } from "./commands.js";
import { morseToString } from "./morseToString.js";

const input = document.querySelector("body");
let upBool = true;
let morse = "";
let code;
let delta;

document.addEventListener("keydown", (e) => { //Home PageUp EndPage DownInsert Pause ScrollLock
    if(e.key=="Control") {
    } else if(e.key=="Meta") {
    } else if(e.key=="Alt") {
    } else if(e.key=="Meta") {
    } else if(e.key=="Shift") {
    } else if(e.key=="Meta") { 
    } else if(e.key=="CapsLock") {
    } else if(e.key=="Escape") {
    } else if(e.key=="ArrowLeft") {
    } else if(e.key=="ArrowRight") { 
    } else if(e.key=="ArrowUp") {
    } else if(e.key=="ArrowDown") {
    } else if(e.key=="Home") {
    } else if(e.key=="PageUp") { 
    } else if(e.key=="PageDown") {
    } else if(e.key=="EndPage") {
    } else if(e.key=="DownInset") { 
    } else if(e.key=="Pause") {
    } else if(e.key=="ScrollLock") {
    } else if(e.key=="F6") { // Stop default behavior
        e.preventDefault();
    } else if(e.key=="ContextMenu") { // Stop default behavior
        e.preventDefault();
    } else if(e.key=="Tab") { // Stop default behavior
        e.preventDefault();
    } else if(e.key=="/") { // Stop firefox from quick searching
        e.preventDefault();
        document.getElementById("terminal").innerHTML += e.key;
    } else if(e.key=="'") { // Stop firefox from quick searching
        e.preventDefault();
        document.getElementById("terminal").innerHTML += e.key;
    } else if(e.key=="Enter") { // Process command
        let command = document.getElementById("terminal").innerHTML.substring(20);
        processCommand(command);
        document.getElementById("terminal").innerHTML = "psikoo@github.io:~$ "
    }else if(e.key=="Backspace") { // Delete last character
        let text = document.getElementById("terminal").innerHTML;
        if(text.length > 20) {
            document.getElementById("terminal").innerHTML = text.substring(0, text.length - 1);
        } else if(morse.length > 0) {
            morse = morse.slice(0, -1); 
            document.getElementById("outMorse").innerHTML = morse; 
            document.getElementById("outString").innerHTML = morseToString(morse);
        } else {
            //TODO add error sound
        }
    } else if(e.key=="z") { // morse
        if(upBool == true) {
            delta = new Date();
            upBool = false;
            code = e.code;
        }
    } else if(e.key=="x") {
        morse += "/"; 
        document.getElementById("outMorse").innerHTML = morse;
    } else if(e.key=="c") {
        morse += "|"; 
        document.getElementById("outMorse").innerHTML = morse;
    } else { // Print out character
        document.getElementById("terminal").innerHTML += e.key;
    }
});

input.addEventListener("keyup", (e) => {
    if(e.code == code && upBool == false) {
        delta = new Date() - delta;
        upBool = true;
        // console.log(code + " - " + delta);
        if(delta < 250) {
            morse += ".";
            document.getElementById("outMorse").innerHTML = morse;
            document.getElementById("outString").innerHTML = morseToString(morse);
            // console.log(morse);
        } else {
            morse += "-";
            document.getElementById("outMorse").innerHTML = morse; 
            document.getElementById("outString").innerHTML = morseToString(morse);
            // console.log(morse);
        }
    }
});
