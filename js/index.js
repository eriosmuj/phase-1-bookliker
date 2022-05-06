const user = {id: 1000, username: 'pourous'};

document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/books')
    .then(resp => resp.json())
    .then(books => {
        books.forEach((data) => {
            showBookList(data);
        })
    });


function showBookList(books) {
    books.forEach((book) => {
        const li = document.createElement('li')
        li.textContent = book.title
        li.addEventListener('click', () => showBookDetails(book))
        document.getElementById('list').append(li)
    })
}

function showBookDetails(data) {
    const showPanel = document.querySelector('#show-panel')
    showPanel.textContent = ''
    const img = document.createElement('img')
    img.src = data.img_url
    const description = document.createElement('h4')
    description.textContent = data.description
    const userList = document.createElement('ul')
    data.users.forEach(user => {
        const li = document.createElement('li')
        li.textContent = user.username
        userList.append(li);
    })
    const likeButton = document.createElement('button')
    likeButton.textContent = 'LIKE'
    likeButton.addEventListener('click', () => {
        books.users.push(user);
        fetch(`http://localhost:3000/books/${book.id}`, {
            method: 'PATCH',
            contentType: 'Application/json',
            body: book.users,
        })

    showPanel.append(img, description, userList, likeButton)
    })}})
