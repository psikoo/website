export async function processCommand(command) {
    command = command.split(" ");
    //Utils
    if(command[0] == "help") {
        addToOld(command[0], helpString);} 
    else if(command[0] == "tamagotchi") {
        addToOld(command[0], tamagotchiString);}
    //Github
    else if(command[0] == "repo") {
        addToOld(command[0], repoString);}
    //Unknown
    else {
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

async function getURL(url) {
    let headersList = {
        "Accept": "*/*",
    }
       
    let response = await fetch(url, { 
         method: "GET",
        headers: headersList
    });
       
    let data = await response.text();
    return data;
}

let repoString = "<a href=\"https://github.com/psikoo/website\" target=\"_blank\">&gtgithub.com/psikoo/website</a>"

let helpString = `<pre class="customFont">
⚠ This project is a WIP (things may not work) 
> Utility commands
    > help
    > tamagotchi
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
Welcome to a community online tamagotchi clone.
> For a list of available commands, type "help". 
                                                                            </pre>`;

let commandNotFoundString = "The given command doesn't exist, to see list of available commands, type \"help\".";