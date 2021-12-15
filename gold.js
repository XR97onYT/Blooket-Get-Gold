// Works on mobile the same as PC.
// To use, make a bookmark, and put in the below
// javascript:fetch("https://raw.githubusercontent.com/XR97onYT/Blooket-Get-Gold/main/gold.js").then((res) => res.text().then((t) => eval(t)))
// And in a blooket game, run this bookmark after the game has started and input your game pin, your username in game, and amount of gold
// Type it like this: 394831,examplename,999999

let data = prompt("Input your game ID, whoever you want to give gold to, and how much gold you want to give. Separate them with commas.")

let data2 = data.split(",")

fetch(
  "https://www.EcstaticOffbeatTriangle.gdb41.repl.co/getgold/",
  {
    method: 'post',
    body: {
    "gamePin": data2[0],
    "user": data2[1],
    "gold": data2[2]
    }
}).then(function(response) {
   alert(response)
})
