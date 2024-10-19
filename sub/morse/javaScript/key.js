import { processCommand } from "./commands.js";
import { morseToString } from "./morseToString.js";

const input = document.querySelector("body");
let upBool = true;
let morse = "";
let code;
let delta;

document.addEventListener("keydown", (e) => {
    if(e.key=="Tab" || e.key=="ContextMenu" || e.key=="F6") {                                   // Stop default behavior
        e.preventDefault();
    } else if(e.key=="/" || e.key=="'") {                                                       // Stop firefox from quick searching
        e.preventDefault();
        document.getElementById("terminal").innerHTML += e.key;
    } else if(e.key=="Enter") {                                                                 // Process command
        let command = document.getElementById("terminal").innerHTML.substring(20);
        processCommand(command);
        document.getElementById("terminal").innerHTML = "psikoo@github.io:~$ "
    } else if(e.key=="Backspace") {                                                             // Delete last character
        let text = document.getElementById("terminal").innerHTML;
        if(text.length > 20) {
            document.getElementById("terminal").innerHTML = text.substring(0, text.length - 1);
        } else if(morse.length > 0) {
            morse = morse.slice(0, -1); 
            document.getElementById("outMorse").innerHTML = morse; 
            document.getElementById("outString").innerHTML = morseToString(morse);
        }
    } else if(e.key=="z" && upBool == true) {                                                    // morse
        delta = new Date();
        upBool = false;
        code = e.code;
    } else if(e.key=="x") {
        morse += "/"; 
        document.getElementById("outMorse").innerHTML = morse;
    } else if(e.key=="c") {
        morse += "|"; 
        document.getElementById("outMorse").innerHTML = morse;
    } else if(e.key.length == 1) {                                                                // Print out character
        document.getElementById("terminal").innerHTML += e.key;
    } 
});

input.addEventListener("keyup", (e) => {
    if(e.code == code && upBool == false) {
        delta = new Date() - delta;
        upBool = true;
        if(delta < 250) {
            morse += ".";
            document.getElementById("outMorse").innerHTML = morse;
            document.getElementById("outString").innerHTML = morseToString(morse);
        } else {
            morse += "-";
            document.getElementById("outMorse").innerHTML = morse; 
            document.getElementById("outString").innerHTML = morseToString(morse);
        }
    }
});
