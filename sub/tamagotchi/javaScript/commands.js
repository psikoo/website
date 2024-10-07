export async function processCommand(command) {
    command = command.split(" ");
    //Utils
    if(command[0] == "help") {
        addToOld(command[0], helpString);} 
    else if(command[0] == "tamagotchi") {
        clearOld();
        addToOld(command[0], await calculateTamagotchiString());}
    else if(command[0] == "reload" || command[0] == "r") {
        clearOld();
        addToOld(command[0], await calculateTamagotchiString());}
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

async function calculateTamagotchiString() {
    let calculatedString = tamagotchiString + await getTamagotchi();
    return calculatedString
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

async function getTamagotchi() {
    //let data = JSON.parse(await getURL("http://quenecesitas.net:3001/getTamagotchi"));
    let data = JSON.parse('{"name":"woamp","bornTime":"TIME","stats":{"happiness":"5","hunger":"3","energy":"5"}}');

    let tamagotchi = `<pre class="customFont">
┌──────────────────────────────────────────────────────────────────────────────────────┐

    Name: ${data.name} Age: ${data.bornTime}
    Happiness: ${data.stats.happiness} Hunger: ${data.stats.hunger} Energy: ${data.stats.energy}
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