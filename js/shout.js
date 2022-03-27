const stringToshout = prompt("What do you want to shout?");
const shout = stringToshout.toLocaleUpperCase();
const shoutMessage = `<h2>The message to shout is: ${shout}!!</h2>`;

document.querySelector('main').innerHTML = shoutMessage;