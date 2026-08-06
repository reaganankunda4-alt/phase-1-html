
console.log('JavaScript is connected');
const form = document.querySelector('form');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', function(event) {

    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;



}

console.log('form  submitted!');
console.log(`Name: ${name}`);
console.log(`Email: ${email}`);
console.log(`Message: ${message}`);

form.reset();

alert(`Thank you, ${name}! Your message has been received.`);

});

async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Something went wrong:', error);
  }
}

getUsers();

