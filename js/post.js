//
// fetch is a promise  it can be accepted  or rejected if we give peoper api  then it'll provide us a  json object..bt if the  api link  is wrong then the promise will be rejected and if a function return a promise we can use '.then' on them..we can handle rejected situation with .catch and 'err' is his own parameter...
// / display ui posts
function displayPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayUi(data));

    // .catch((err) =>console.log(err));
}
displayPosts();

function displayUi(posts) {
    const blog = document.getElementById('blogs');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `<h2>${post.title}</h2>
       <p>${post.body}</p>`;
        blog.appendChild(div)

    }
}
// quiz
// const stuInfo = JSON.stringify({ name: "James", roll: 3 });
// console.log(stuInfo.name);

