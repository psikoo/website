export async function processCommand(command) {
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
    //Github
    else if(command[0] == "repo") {
        addToOld(command[0], repoString);}
    else if(command[0] == "about") {
        addToOld(command[0], aboutString);}
    else if(command[0] == "projects") {
        let projectsString = "";
        let data = JSON.parse(await getURL("https://api.github.com/users/psikoo/repos"));
        for(let i = 0; i < data.length; i++) {
            console.log(data[i].full_name);
            projectsString += "<a href=\"https://github.com/"+data[i].full_name+"\" target=\"_blank\">&gt"+data[i].full_name+"</a><br>";
        }
        addToOld(command[0], projectsString);}
    else if(command[0] == "aboutMe") {
        addToOld(command[0], aboutMeString);}
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

let hostString = "github.io";
let whoamiString = "psikoo";
let repoString = "<a href=\"https://github.com/psikoo/website\" target=\"_blank\">&gtgithub.com/psikoo/website</a>"
let aboutString = "This project was made with pure HTML, CSS and JS. To see how it was made use the command \"repo\". To see other projects of mine use the command \"projects\"."
let aboutMeString = "<a href=\"https://github.com/psikoo\" target=\"_blank\">&gtgithub.com/psikoo</a>"

let commandNotFoundString = "The given command doesn't exist, to see list of available commands, type \"help\".";
let helpString = `<pre class="customFont">
> Utility commands
    > help
    > clear
    > banner
    > echo
    > cat
> Github
    > repo
    > about
    > projects
    > aboutMe
> Info commands
    > hostname
    > whoami
    > date
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
⠈⠿⡿⠃⠀⠀⠀ ⠀⣿⣿⣿⣧⠀⠀⠀⠀⠀⠉⠻⣿⡿⠂
 ⠀⠀⠀⠀⠀⠀⠀  ⠈⢿⡿⠟⠃⠀⠀⠀⠀⠀⠀⠈⠀⠀

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