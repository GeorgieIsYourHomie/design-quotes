// Variables
const quoteElement = document.getElementById("quote");
const quoteButton = document.getElementById("quote-button");
const authorElement = document.getElementById("author");

// Event handler
// Function to fetch a random quote
const getRandomQuote = () => {
  fetch(
    "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&per_page=5"
  ) // Fetch multiple quotes
    .then((res) => res.json())
    .then((data) => {
      // Randomly select a quote from the fetched data along with relevant author
      const randomIndex = Math.floor(Math.random() * data.length);
      quoteElement.innerHTML = `${data[randomIndex].content.rendered}`; 
      authorElement.innerHTML = `- ${data[randomIndex].title.rendered}`;
    })
    .catch((error) => {
      quoteElement.innerHTML = "Error fetching quote. Please try again.";
      authorElement.innerHTML = "Error fetching author. Please try again";
      console.error("Error fetching quote:", error);
    });
};

// Event listener
quoteButton.addEventListener("click", getRandomQuote);

// Initialize quote fetch on page load
window.onload = getRandomQuote;
