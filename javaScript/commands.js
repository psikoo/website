export function processCommand(command) {
    command = command.split(" ");
    console.log(command[0])
    if(command[0] == "help") {
        document.getElementById("response").innerHTML = helpString;
    }

    if(command[0] == "banner") {
        document.getElementById("response").innerHTML = bannerString;
    }

    if(command[0] == "echo") {
        document.getElementById("response").innerHTML = ""
        for(let i = 1; i < command.length; i++) {
            document.getElementById("response").innerHTML += command[i]+" ";
        }
    }
}



let helpString = "this is the help string"; //TODO

let bannerString = `<pre class='customFont'>
                                                                            
██████╗ ███████╗██╗██╗  ██╗ ██████╗  ██████╗ ██╗    ██╗███████╗██████╗      
██╔══██╗██╔════╝██║██║ ██╔╝██╔═══██╗██╔═══██╗██║    ██║██╔════╝██╔══██╗     
██████╔╝███████╗██║█████╔╝ ██║   ██║██║   ██║██║ █╗ ██║█████╗  ██████╔╝     
██╔═══╝ ╚════██║██║██╔═██╗ ██║   ██║██║   ██║██║███╗██║██╔══╝  ██╔══██╗     
██║     ███████║██║██║  ██╗╚██████╔╝╚██████╔╝╚███╔███╔╝███████╗██████╔╝     
╚═╝     ╚══════╝╚═╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝  ╚══╝╚══╝ ╚══════╝╚═════╝  v1.0
                                                                            </pre>`;