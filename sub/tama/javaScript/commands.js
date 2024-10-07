import fs from "fs";

export async function processCommand(command) {
    command = command.split(" ");
    //Utils
    if(command[0] == "help") {
        addToOld(command[0], helpString);} 
    else if(command[0] == "tamagotchi") {
        clearOld();
        addToOld(command[0], calculateTamagotchiString());}
    else if(command[0] == "reload" || command[0] == "r") {
        clearOld();
        addToOld(command[0], calculateTamagotchiString());}
    //Github
    else if(command[0] == "repo") {
        clearOld();
        addToOld(command[0], repoString);}
    //Unknown
    else {
        clearOld();
        addToOld(command[0], commandNotFoundString);}
}

function addToOld(command , content) {
    document.getElementById("old").innerHTML += "<div>psikoo@github.io:~$ "+command+"</div>";
    if(content != undefined) {
        document.getElementById("old").innerHTML += content;
    }
    document.getElementById("terminal").innerHTML = "psikoo@github.io:~$ ";
}

function clearOld() {
    document.getElementById("old").innerHTML = "";
}

function calculateTamagotchiString() {
    let calculatedString = tamagotchiString + getTamagotchi();
    return calculatedString
}

function getTamagotchi() {
    let tamagotchi = `<pre class="customFont">
┌──────────────────────────────────────────────────────────────────────────────────────┐

    Name: NAMESTRING Age: AGESTRING
    Happiness: HAPPINESSTRING Hunger: HUNGERSTRING Energy: ENERGYSTRING
    ${new Date().valueOf()}

└──────────────────────────────────────────────────────────────────────────────────────┘

</pre>`;
    return tamagotchi;
}

let repoString = "<a href=\"https://github.com/psikoo/website\" target=\"_blank\">&gtgithub.com/psikoo/website</a>"

let helpString = `<pre class="customFont">
⚠ This project is a WIP (things may not work) 
> Utility commands
    > help
    > tamagotchi
    > reload
> Github
    > repo
</pre>`;

let tamagotchiString = `<pre class="customFont">
                                                                                       
████████╗ █████╗ ███╗   ███╗ █████╗  ██████╗  ██████╗ ████████╗ ██████╗██╗  ██╗██╗     
╚══██╔══╝██╔══██╗████╗ ████║██╔══██╗██╔════╝ ██╔═══██╗╚══██╔══╝██╔════╝██║  ██║██║     
   ██║   ███████║██╔████╔██║███████║██║  ███╗██║   ██║   ██║   ██║     ███████║██║     
   ██║   ██╔══██║██║╚██╔╝██║██╔══██║██║   ██║██║   ██║   ██║   ██║     ██╔══██║██║     
   ██║   ██║  ██║██║ ╚═╝ ██║██║  ██║╚██████╔╝╚██████╔╝   ██║   ╚██████╗██║  ██║██║     
   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝    ╚═════╝╚═╝  ╚═╝╚═╝ v1.0
Welcome to a community online tamagotchi clone. Try using "help" for a list of commands
                                                                            </pre>`;

let commandNotFoundString = "The given command doesn't exist.";