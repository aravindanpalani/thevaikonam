//  Data (Simulated from data.json)
const keyData = [
    {
        "id": 1,
        "name": "John Smith",
        "phone_number": "123-456-7890",
        "address": "123 Main St, Anytown, USA",
        "occupation": "Electrician",
        "charges": 50.00,
        "rating": 4.5,
        "status": "online",
        "details": "Licensed electrician with 10+ years of experience."
    },
    {
        "id": 2,
        "name": "Jane Doe",
        "phone_number": "987-654-3210",
        "address": "456 Oak Ave, Somecity, USA",
        "occupation": "Plumber",
        "charges": 60.00,
        "rating": 4.8,
        "status": "offline",
        "details": "Certified plumber specializing in residential repairs."
    },
    {
        "id": 3,
        "name": "David Lee",
        "phone_number": "555-123-4567",
        "address": "789 Pine Ln, Othertown, USA",
        "occupation": "Carpenter",
        "charges": 40.00,
        "rating": 4.2,
        "status": "online",
        "details": "Experienced carpenter for custom woodworking projects."
    }
];

// Get DOM Elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsList = document.getElementById('results-list');


// Event Listeners
searchButton.addEventListener('click', searchKeys);


// Functions

/**
 * Searches the key data based on the user's query.
 */
function searchKeys() {
    const query = searchInput.value.toLowerCase();
    const results = keyData.filter(key =>
        key.name.toLowerCase().includes(query) ||
        key.occupation.toLowerCase().includes(query) ||
        key.address.toLowerCase().includes(query)
    );
    displayResults(results);
}

/**
 * Displays the search results in the UI.
 * @param {Array} keys - An array of key objects to display.
 */
function displayResults(keys) {
    resultsList.innerHTML = ''; // Clear previous results.

    if (keys.length === 0) {
        resultsList.innerHTML = '<li class="no-results">No results found.</li>';
        return;
    }

    keys.forEach(key => {
        const listItem = document.createElement('li');
        listItem.classList.add('key-item');
        listItem.innerHTML = `
            <h3 class="key-name">${key.name}</h3>
            <p class="key-occupation"><strong>Occupation:</strong> ${key.occupation}</p>
            <p class="key-phone"><strong>Phone:</strong> ${key.phone_number || 'N/A'}</p>
            <p class="key-address"><strong>Address:</strong> ${key.address || 'N/A'}</p>
            <p class="key-charges"><strong>Charges:</strong> $${key.charges || 'N/A'}</p>
            <p class="key-rating"><strong>Rating:</strong> ${key.rating || 'N/A'}</p>
            <p class="key-status"><strong>Status:</strong> ${key.status}</p>
            <p class="key-details"><strong>Details:</strong> ${key.details || 'N/A'}</p>
        `;
        resultsList.appendChild(listItem);
    });
}