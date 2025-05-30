const form = document.getElementById('commentForm');
const input = document.getElementById('commentInput');
const list = document.getElementById('commentsList');

let comments = JSON.parse(localStorage.getItem('comments') || '[]');

function renderComments() {
  list.innerHTML = '';
  comments.forEach(text => {
    const div = document.createElement('div');
    div.className = 'comment';
    div.textContent = text;
    list.appendChild(div);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    comments.push(text);
    localStorage.setItem('comments', JSON.stringify(comments));
    input.value = '';
    renderComments();
  }
});

renderComments();