var name = prompt("What is your name?");
var firstletter = name.slice(0, 1);
firstletter =  firstletter.toUpperCase();
var otherletters = name.slice(1);
otherletters = otherletters.toLowerCase();
document.getElementById("demo").innerHTML = firstletter + otherletters;
 