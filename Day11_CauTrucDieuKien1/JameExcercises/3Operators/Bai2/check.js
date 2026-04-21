let inputText = prompt("Input your role here: ");
let message = 
(inputText === "Employee")? 'Hello':
(inputText === "Director")? 'Greeting':
(inputText === "")? 'No login' :
'<null>';
alert(message);