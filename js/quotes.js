const quotes = [
  {
    quote: "Everything that one thinks about a lot becomes problematic.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Feel the fear and do it anyway.",
    author: "Susan Jeffers",
  },
  {
    quote: "He that lives upon hope will die fasting.",
    author: "Benjamin Franklin",
  },
  {
    quote: "The saddest thing I can imagine is to get used to luxury.",
    author: "Charlie Chaplin",
  },
  {
    quote: "Convictions are prisons.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "To go beyond is as wrong as to fall short.",
    author: "Confucius",
  },
  {
    quote: "Time is an illusion. Lunchtime doubly so.",
    author: "Douglas Adams",
  },
  {
    quote: "It is a great ability to be able to conceal one's ability.",
    author: "Francois de La Rochefoucauld",
  },
  {
    quote: "The first duty of love is to listen.",
    author: "Paul Tillich",
  },
  {
    quote: "A friend to all is a friend to none.",
    author: "Aristotle",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = `${todaysQuote.quote}<br />`;
author.innerText = todaysQuote.author;
