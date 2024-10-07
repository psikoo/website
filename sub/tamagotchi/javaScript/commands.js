export async function processCommand(command) {
    command = command.split(" ");
    //Utils
    if(command[0] == "help") {
        addToOld(command[0], helpString);} 
    else if(command[0] == "tamagotchi" || command[0] == "reload" || command[0] == "r") {
        await postURL("http://quenecesitas.net:3001/reload", {"lastUpdate":`${new Date().valueOf()}`});
        clearOld();
        addToOld(command[0], await calculateTamagotchiString());}
    //Github
    else if(command[0] == "repo") {
        clearOld();
        addToOld(command[0], repoString);}
    //Admin
    else if(command[0] == "admin" && command[1] == "new") {
        await postURL("http://quenecesitas.net:3001/postTamagotchi", {"name":`${command[2]}`,"state":"Alive","bornTime":`${new Date().valueOf()}`,"deadTime":"time","happiness":"10","hunger":"10","energy":"10","lastUpdate":`${new Date().valueOf()}`});
        clearOld();
        addToOld("tamagotchi", await calculateTamagotchiString());}
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

async function postURL(url, body) {
    let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    }
    let bodyContent = JSON.stringify(body);
    let response = await fetch(url, { 
        method: "POST",
        body: bodyContent,
        headers: headersList
    });
       
    let data = await response.text();
    return data;
}

async function getTamagotchi() {
    let data = JSON.parse(await getURL("http://quenecesitas.net:3001/getTamagotchi"));
    if(data.state == "Dead") {
        let age = (((new Date().valueOf()-data.deadTime)/1000)/3600).toFixed(2)
    } else {
        let age = (((new Date().valueOf()-data.bornTime)/1000)/3600).toFixed(2)
    }

    let tamagotchi = `<pre class="customFont">
┌──────────────────────────────────────────────────────────────────────────────────────┐

    Name: ${data.name} State: ${data.state} Age: ${(((new Date().valueOf()-data.bornTime)/1000)/3600).toFixed(2)} hours
    Happiness: ${data.happiness} Hunger: ${data.hunger} Energy: ${data.energy}

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