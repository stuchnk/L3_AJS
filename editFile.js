1.

function loadPosts(callback) {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => {
      const sorted = posts.sort((a, b) => b.title.length - a.title.length);
      callback(sorted);
    })
    .catch(err => console.error("Ошибка при загрузке постов:", err));
}

loadPosts(result => {
  console.log("Посты по длине заголовка:", result);
});

function loadComments(callback) {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(comments => {
      const sorted = comments.sort((a, b) => a.email.localeCompare(b.email));
      callback(sorted);
    })
    .catch(err => console.error("Ошибка при загрузке комментариев:", err));
}

loadComments(result => {
  console.log("Комментарии по email:", result);
});

2.

function extractUserFields() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => users.map(({ id, name, username, email, phone }) => ({
      id, name, username, email, phone
    })));
}

extractUserFields()
  .then(data => console.log("Пользователи с нужными полями:", data))
  .catch(err => console.error("Ошибка:", err));


function getPendingTodos() {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(todos => todos.filter(todo => !todo.completed));
}

getPendingTodos()
  .then(data => {
    console.log("Невыполненные задачи:", data);
    console.log("Всего:", data.length);
  })
  .catch(err => console.error("Ошибка:", err));

3. 

async function fetchSortedPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    return posts.sort((a, b) => b.title.length - a.title.length);
  } catch (err) {
    console.error("Ошибка при получении постов:", err);
  }
}

fetchSortedPosts().then(data => console.log("Async: посты по длине title", data));

async function fetchSortedComments() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const comments = await res.json();
    return comments.sort((a, b) => a.email.localeCompare(b.email));
  } catch (err) {
    console.error("Ошибка при получении комментариев:", err);
  }
}

fetchSortedComments().then(data => console.log("Async: комментарии по email", data));
