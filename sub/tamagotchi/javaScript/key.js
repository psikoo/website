import { processCommand } from "./commands.js";

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
    } else if(e.key=="Backspace" && text.length > 20) {                                         // Delete last character
        let text = document.getElementById("terminal").innerHTML;
        document.getElementById("terminal").innerHTML = text.substring(0, text.length - 1);
    } else if(e.key.length == 1) {                                                              // Print out character
        document.getElementById("terminal").innerHTML += e.key;
    }
});