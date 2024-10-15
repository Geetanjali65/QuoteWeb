const quotes = [
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "You are never too old to set another goal or to dream a new dream.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Success is not the key to happiness. Happiness is the key to success."
];

let favorites = [];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to display a quote
function displayQuote() {
    const quote = getRandomQuote();
    document.getElementById('quote').innerText = quote;
}

// Function to share the quote
function shareQuote() {
    const quote = document.getElementById('quote').innerText;
    if (navigator.share) {
        navigator.share({
            title: 'Quote of the Day',
            text: quote,
        }).catch(err => console.error('Error sharing:', err));
    } else {
        alert('Sharing not supported in this browser.');
    }
}

// Function to add quote to favorites
function addToFavorites() {
    const quote = document.getElementById('quote').innerText;
    if (!favorites.includes(quote)) {
        favorites.push(quote);
        updateFavoritesList();
    } else {
        alert('This quote is already in your favorites.');
    }
}

// Function to update the favorites list
function updateFavoritesList() {
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = '';
    favorites.forEach(quote => {
        const li = document.createElement('li');
        li.innerText = quote;
        favoritesList.appendChild(li);
    });
}

// Event listeners
document.getElementById('refresh').addEventListener('click', displayQuote);
document.getElementById('share').addEventListener('click', shareQuote);
document.getElementById('favorite').addEventListener('click', addToFavorites);

// Initialize the app
window.onload = displayQuote;
