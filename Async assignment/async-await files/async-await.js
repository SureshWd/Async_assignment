// write the fuction with async-await to fetch data from api
async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return await response.json();
}
// code for access the elements 
document.getElementById('myButton').addEventListener('click', async function() {
    const outputContainer = document.getElementById('outputContainer');
    outputContainer.textContent = 'Loading...';
    outputContainer.style.display = 'block';
// code for handle the errors
    try {
        const posts = await fetchPosts();
        outputContainer.innerHTML = '<h3>Posts:</h3>';
        const ul = document.createElement('ul');
        posts.forEach(post => {
            const li = document.createElement('li');
            li.textContent = post.title;
            ul.appendChild(li);
        });
        outputContainer.appendChild(ul);
    } catch (error) {
        outputContainer.textContent = 'Error: ' + error.message;
        console.error('Error:', error);
    }
});