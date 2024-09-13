const blogDetail = document.querySelector('.blogDetail');
const url = "http://localhost:3000/blogs/";

getData();

async function getData() {
    var query = new URLSearchParams(window.location.search);
    var parameters = Object.fromEntries(query.entries());

    var data = await fetch(url + parameters.id);
    var resData = await data.json();

    blogDetail.innerHTML = `
        <h1>${resData.title}</h1>
        <p>${resData.content}</p>
    `
    
}