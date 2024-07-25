// function for fetching data from api
function fetchData() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error);
        });
    });
}
// function for create new promise also access the elements
function performAsyncOperation() {
    return new Promise((resolve, reject) => {
        const outputContainer = document.getElementById('outputContainer');
        outputContainer.textContent = 'Loading...';
        outputContainer.style.display = 'block';
        
        // Simulate a 5-second delay
        setTimeout(() => {
            // Once the delay is over, fetch data from the API
            fetchData()
            .then(data => {
                // Once data is fetched, update the output container's text content
                outputContainer.innerHTML = '<h3>Posts:</h3>';
                data.forEach(post => {
                    const p = document.createElement('p');
                    p.textContent = post.title;
                    outputContainer.appendChild(p);
                });
                resolve();
            })
            .catch(error => {
                outputContainer.textContent = 'Operation timed out.';
                reject(error);
            });
        }, 5000);
    });
}
// call the function to display output
document.getElementById('myButton').addEventListener('click', function() {
    performAsyncOperation();
});