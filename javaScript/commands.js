export function processCommand(command) {
    command = command.split(" ");
    //Utils
    if(command[0] == "help") {
        addToOld(command[0], helpString);} 
    else if(command[0] == "clear") {
        clearOld();} 
    else if(command[0] == "banner") {
        addToOld(command[0], bannerString);}
    else if(command[0] == "echo") {
        let echoCommandString = command[0]+" ";
        let echoString = "";
        for(let i = 1; i < command.length; i++) {
            echoCommandString += command[i]+" ";
            echoString += command[i]+" ";
        }
        addToOld(echoCommandString, echoString);} 
    else if(command[0] == "cat") {
        addToOld(command[0], catString);}
    //Info
    else if(command[0] == "hostname") {
        addToOld(command[0], hostString);} 
    else if(command[0] == "whoami") {
        addToOld(command[0], whoamiString);} 
    else if(command[0] == "date") {
        const date = new Date();
        addToOld(command[0], date);} 
    else if(command[0] == "repo") {
        addToOld(command[0], repoString);}
    else if(command[0] == "socials") {
        addToOld(command[0], socialsString);}
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




let hostString = "github.io";
let whoamiString = "psikoo";
let repoString = "<a href=\"https://github.com/psikoo/website\" target=\"_blank\">github.com/psikoo/website</a>"
let socialsString = "<a href=\"https://github.com/psikoo\" target=\"_blank\">github.com/psikoo</a>"

let commandNotFoundString = "The given command doesn't exist, to see list of available commands, type \"help\".";
let helpString = `<pre class="customFont">
> Utility commands
    > help
    > clear
    > banner
    > echo
    > cat
> Info commands
    > hostname
    > whoami
    > date
    > repo
    > socials
</pre>`;

let catString = `<pre class="customFont">

⠀⠀⠀⠀⠀⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢿⣧⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⣿⣇⠀⢸⣿⣿⣦⣤⣄⣀⣴⣿⣷⠀⠀⠀
⠀⠀⠀⠀⠀⢸⣿⣿⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀
⠀⠀⠀⠀⢀⣼⣿⣿⣧⣿⣿⣿⣿⡟⣿⣿⣿⠻⣿⠂⡀⠀
⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣧⣿⣿⣿⣦⣿⣏⠁⠀
⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀
⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀
⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀
⢠⣾⣿⡿⠋⠀⠈⠙⣿⣿⣿⡿⣿⡿⠿⠟⢿⣿⣿⣷⣄⠀
⠈⠿⡿⠃⠀⠀⠀⠀⣿⣿⣿⣧⠀⠀⠀⠀⠀⠉⠻⣿⡿⠂
 ⠀⠀⠀⠀⠀⠀⠀⠈⢿⡿⠟⠃⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀

 </pre>`
let bannerString = `<pre class="customFont">
                                                                            
██████╗ ███████╗██╗██╗  ██╗ ██████╗  ██████╗ ██╗    ██╗███████╗██████╗      
██╔══██╗██╔════╝██║██║ ██╔╝██╔═══██╗██╔═══██╗██║    ██║██╔════╝██╔══██╗     
██████╔╝███████╗██║█████╔╝ ██║   ██║██║   ██║██║ █╗ ██║█████╗  ██████╔╝     
██╔═══╝ ╚════██║██║██╔═██╗ ██║   ██║██║   ██║██║███╗██║██╔══╝  ██╔══██╗     
██║     ███████║██║██║  ██╗╚██████╔╝╚██████╔╝╚███╔███╔╝███████╗██████╔╝     
╚═╝     ╚══════╝╚═╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝  ╚══╝╚══╝ ╚══════╝╚═════╝  v1.0
For a list of available commands, type "help".                              
                                                                            </pre>`;