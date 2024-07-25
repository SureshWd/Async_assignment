// access the elements 
document.getElementById('myButton').addEventListener('click', function() {
    const outputContainer = document.getElementById('outputContainer');
    outputContainer.textContent = 'Callback executed after 5 seconds...';
    outputContainer.style.display = 'block';
    simulateDelay(5000, function() {
        fetchPosts();
    });
});
   // Simulate a 5-second delay
function simulateDelay(delay, callback) {
    setTimeout(callback, delay);
}
// function for fetching data from api
function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            displayPosts(data);
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
}
// function to display output
function displayPosts(posts) {
    const outputContainer = document.getElementById('outputContainer');
    outputContainer.innerHTML = '<h3>Posts:</h3>';
    const ul = document.createElement('ul');
    posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = `${post.title}`;
        ul.appendChild(li);
    });
    outputContainer.appendChild(ul);
}