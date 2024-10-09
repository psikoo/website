
# psikooWeb

psikooWeb is an static website made with pure HTML, CSS and JS. It is hosted using the github pages system, [psikoo.github.io/website](https://psikoo.github.io/website/). psikooWeb is meant to resemble Arch linux´s base terminal mixed with Windows10´s default terminal theme, this is because I personally love the look of "psikoo[]()@github.io:~$ " from the Arch terminal and the fully black and white theme of Windows terminal.

This project was heavily inspired by a similar website [term.m4tt72.com](https://term.m4tt72.com/).

## Using the website:

The website works like any other terminal. The command "help" prints out a list off available commands.

**List of commands:**

- Utility commands
    - help          | Prints out this message
    - clear         | Clears the screen
    - banner        | Prints the terminal banner
    - echo          | Prints the arguments following the command
    - cat           | Meow :3
    - tamagotchi    | Multiplayer tamagotchi
- Github
    - repo          | Link to the websites repository
    - about         | Prints short about message
    - projects      | Link to all of my public repositories
    - aboutMe       | Link to my github profile
- Info commands     
    - hostname      | Prints the hostname
    - whoami        | Prints the username
    - date          | Prints the current date and time

## Hosting your own

**Important:**

- Create a file called "token" on the base the directory of the project and add the following contents to it:
``` env
YOURGITHUBTOKEN
```
- YOURGITHUBTOKEN should a github api token with read:user permissions, you can get your token [here](https://github.com/settings/tokens/new).

- You also need to install the needed dependencies by running the following command:

```bash
npm install
```