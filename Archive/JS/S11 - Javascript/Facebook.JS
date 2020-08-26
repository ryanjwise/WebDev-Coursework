var database = [
    {
        username: "Ryan",
        password: "1234"
    }
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

function signIn(username, password) {
    if (username === database[0].username && password === database[0].password) {
            console.log(newsFeed);
        } else {
            alert("Sorry, wrong username and password combination");
        }
};

signIn(userNamePrompt, passwordPrompt);