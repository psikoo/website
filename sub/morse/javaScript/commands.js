export async function processCommand(command) {
    command = command.split(" ");
    //Utils
    if(command[0] == "help") {
        addToOld(command[0], helpString);} 
    else if(command[0] == "main") {
        window.location.href = window.location.protocol + "//" + window.location.hostname; }
    else if(command[0] == "banner") {
        clearOld();
        addToOld(command[0], bannerString);}
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

let repoString = "<a href=\"https://github.com/psikoo/website\" target=\"_blank\">&gtgithub.com/psikoo/website</a>"

let helpString = `<pre class="customFont">
> Utility commands
    > help
    > main
    > banner
> Github
    > repo
</pre>`;

let bannerString = `<pre class="customFont">
                                             
███╗   ███╗ ██████╗ ██████╗ ███████╗███████╗     
████╗ ████║██╔═══██╗██╔══██╗██╔════╝██╔════╝     
██╔████╔██║██║   ██║██████╔╝███████╗█████╗       
██║╚██╔╝██║██║   ██║██╔══██╗╚════██║██╔══╝       
██║ ╚═╝ ██║╚██████╔╝██║  ██║███████║███████╗     
╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝ v1.0
Welcome to a simple morse interpreter. Try using "help" for a list of commands
> quick press z = .
> long press z = -
> x = new letter
> c = new word
> backspace = delete last input
</pre>`;

let commandNotFoundString = "The given command doesn't exist.";