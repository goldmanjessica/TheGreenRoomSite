

(new IntersectionObserver(function(e,o){
    if (e[0].intersectionRatio > 0){
        document.documentElement.removeAttribute('class');
    } else {
        document.documentElement.setAttribute('class','stuck');
    };
})).observe(document.querySelector('.trigger'));



var quote = document.getElementById("fact-js");
var quoteBtn = document.getElementById("fact-btn");


//Random quote machine
var quotes = [
  'The oldest written references to cannabis date back to 2727 B.C., when the Chinese Emperor Shen Nung supposedly discovered the substance and used it medicinally.',
  'The marijuana plant is not used only for smoking; its fibers can also be made into rope or fabric.',
  'Bill Gates and other investors have secured a “doomsday seed vault” to preserve a wide variety of plant seeds in the remote Arctic Svalbard archipelago.',
  'Beer & cannabis are COUSINS! Beers hops are in the same family of flowering plants as cannabis. We are family.',
  'George Washington grew cannabis at Mount Vernon. Okay, so he called it hemp.',
  'California was the first U.S. state to ban cannabis a century ago. Kind of ironic, don’t you think?',
  'In Colorado, recreational cannabis dispensaries outnumber Starbucks locations 3 to 1. Hah, still no big surprise.',
  'Bob Marley was buried with his red Gibson guitar, a Bible open to Psalms 23 and a cannabis bud.'
];

quoteBtn.onclick = function randomQuote() {
  var rand = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerHTML = rand;
};




