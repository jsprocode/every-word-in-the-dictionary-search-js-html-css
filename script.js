document.addEventListener("DOMContentLoaded", function () {
    // Load the dictionary from the JSON file
    fetch('dictionary.json')
        .then(response => response.json())
        .then(data => {
            const dictionary = Object.keys(data);

            // Function to perform the search and display results
            function searchDictionary() {
                const searchInput = document.getElementById('searchInput').value.toLowerCase();
                const searchResults = document.getElementById('searchResults');
                searchResults.innerHTML = '';

                if (searchInput.length === 0) return;

                const matchingWords = dictionary.filter(word => word.startsWith(searchInput));

                matchingWords.forEach(match => {
                    const listItem = document.createElement('li');
                    listItem.textContent = match;
                    searchResults.appendChild(listItem);
                });
            }

            // Attach the search function to the input event
            document.getElementById('searchInput').addEventListener('input', searchDictionary);
        })
        .catch(error => console.error('Error loading dictionary:', error));
});
