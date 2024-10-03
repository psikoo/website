import { processCommand } from "./commands.js";

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
        document.getElementById("text").innerHTML += e.key;
    } else if(e.key=="'") { // Stop firefox from quick searching
        e.preventDefault();
        document.getElementById("text").innerHTML += e.key;
    } else if(e.key=="Enter") { // Process command
        let command = document.getElementById("text").innerHTML.substring(18);
        processCommand(command);
        document.getElementById("text").innerHTML = "psikoo@website:~$ "
    }else if(e.key=="Backspace") { // Delete last character
        let text = document.getElementById("text").innerHTML;
        if(text.length > 18) {
            document.getElementById("text").innerHTML = text.substring(0, text.length - 1);
        } else {
            //TODO add error sound
        }
    } else { // Print out character
        document.getElementById("text").innerHTML += e.key;
    }
});