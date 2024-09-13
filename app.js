const blogsDv = document.querySelector('.blogs');


const url = "http://localhost:3000/blogs/";

fetchBlogs();

async function fetchBlogs() {
    let data = await fetch(url);
    let blogs = await data.json();

    printBlogs(blogs);
    
}

function printBlogs(blogData) {
    blogData.forEach(item => {
        let blogEl = document.createElement('div');
        blogEl.classList.add('blog');

        blogEl.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.content}</p>
            <a href="blog.html?id=${item.id}">Read more ...</a>
        `;

        blogsDv.appendChild(blogEl);
    })
}