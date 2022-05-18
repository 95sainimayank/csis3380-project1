
//Quotes array to store all the quotes
const quotes = [];

//quotes objects to be stored in the quotes array
let quote1 = { "quote" : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            "source" : "Nelson Mandela"};

let quote2 = { "quote" : "The way to get started is to quit talking and begin doing.",
                "source" : "Walt Disney",
                "citation" : "https://blog.hubspot.com/sales/famous-quotes",
                "year": "1945"};

let quote3 = { "quote" : "If life were predictable it would cease to be life, and be without flavor",
                "source" : "Eleanor Roosevelt"};

let quote4 = { "quote" : "Life is what happens when you're busy making other plans.", 
                "source" : "John Lennon",
                "year" : "1996"};

let quote5 = { "quote" : "You will face many defeats in life, but never let yourself be defeated.", 
                "source" : "Maya Angelou"};

let quote6 = { "quote" : "May you live all the days of your life.",
                "source" : "Jonathan Swift"};

//pushing quote objects to quotes array
quotes.push(quote1);
quotes.push(quote2);
quotes.push(quote3);
quotes.push(quote4);
quotes.push(quote5);
quotes.push(quote6);

//stores value of  index of previous selected quote.
var previousQuoteNumber = -1;

//Gets random quotes from the quotes array
function getRandomQuote(){
    var randomNumber = Math.floor(Math.random() * quotes.length);

    while(randomNumber == previousQuoteNumber){
        randomNumber = Math.floor(Math.random() * quotes.length);
    }

    previousQuoteNumber = randomNumber;

    return quotes[randomNumber];
}

//prints the random quote, source, citation and year to the html page
function printQuote(){
    var randomQuote = getRandomQuote();

    var htmlElements = '<p class="quote">' + randomQuote.quote +'</p><p class="source">' + randomQuote.source;

    if(randomQuote.hasOwnProperty('citation')){
        htmlElements += '<span class="citation">' + randomQuote.citation + '</span>';
    }

    if(randomQuote.hasOwnProperty('year')){
        htmlElements += '<span class="year">' + randomQuote.year + '</span>';
    }

    htmlElements += '</p>';

    document.getElementById('quote-box').innerHTML = htmlElements;
}

//Click listener for the "next quote" button
document.getElementById('load-quote').addEventListener('click', printQuote);