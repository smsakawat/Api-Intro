// function loadData() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(data => console.log(data))
// }

// function loadUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => displayUsers(data));
// }

// function loadPosts() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(data => console.log(data));
// }

// function displayUsers(data) {
//     const ul = document.getElementById('users');
//     // console.log(data);
//     for (const user of data) {
//         console.log(user);
//         const li = document.createElement('li');
//         li.innerText = `name: ${user.name} email: ${user.email}`;
//         ul.appendChild(li);
//     }
// }
// Dynamically display  loaded data on my website
function showUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUi(data));
}
function displayUi(users) {
    const div = document.getElementById('users');
    for (const user of users) {
        const p = document.createElement('p');
        p.innerText = `User Name:${user.name} email:${user.email} adress:${user.adress}`;
        div.appendChild(p);
        p.style.fontWeight = 'bold';

    }
}
