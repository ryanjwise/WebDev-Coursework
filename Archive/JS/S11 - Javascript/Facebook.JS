var database = [
    {
        username: "Ryan",
        password: "1234"
    },
    {
        username: "Ingrid",
        password: "777"
    },
    {
        username: "Sally",
        password: "123"
    },
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sarah",
        timeline: "JavaScript is great!"        
    }
];

var userNamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("Whats your password?");

function isUserValid(username, password)
for (var i=0; i < database.length; i++) {
    if(database[i].username === username && database[i].password === password) {
        return true;
    }
    return false;
    }

function signIn(username, password) {
    console.log(isUserValid(username, password));
    if (isUserValid(username, password)) {
            console.log(newsFeed);
        } else {
            alert("Sorry, wrong username and password combination");
        }
};

signIn(userNamePrompt, passwordPrompt);