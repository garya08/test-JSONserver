const form = document.querySelector('form');

const url = "http://localhost:3000/blogs/";

form.addEventListener('submit', (event) => {
    event.preventDefault();

    var userData = new FormData(event.target);
    var data = Object.fromEntries(userData);

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => {
        alert('Data Added Succesfuly');
    })
})