// Assignment 1 | COMP1073 Client-Side JavaScript
// kamaljit kaur 200537971
/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var Nouns = ["The Turkey","Mom", "Dad", "The Dog", "My Teacher", "The Elephant", "The Cat"]
var Noun = document.querySelector('.n');

var Verbs = ["sat on", "Ate", "danced With", "saw", "Doesn't Like", "Kissed"]
var Verb = document.querySelector('.v');

var Adjectives = ["A Funny", "A scary", "A Slimy", "A Goofy", "A Barking", "A Fat"]
var Adjective = document.querySelector('.a');

var Animals = ["Goat", "Monkey", "Fish", "Cow", "Frog", "Bug", "Worm"]
var Animal = document.querySelector('.an');

var Prepositions = ["on the Moon", "on the chair", "in my Spaghetti", "in my Soup", "on the Grass", "in my Shoes"]
var preposition = document.querySelector('.p');

var story = document.querySelector(".r") 


  
/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

function ranArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Event Listeners
Noun.addEventListener('click', function() {
  var randomNoun = ranArray(Nouns);
  speakNow(randomNoun);
});

Verb.addEventListener('click', function() {
  var randomVerb = ranArray(Verbs);
  speakNow(randomVerb);
});

Adjective.addEventListener('click', function() {
  var randomAdjective = ranArray(Adjectives);
  speakNow(randomAdjective);
});

Animal.addEventListener('click', function() {
  var randomAnimal = ranArray(Animals);
  speakNow(randomAnimal);
});

preposition.addEventListener('click', function() {
  var randomPreposition = ranArray(Prepositions);
  speakNow(randomPreposition);
});

story.addEventListener('click', function() {
  var randomNoun = ranArray(Nouns);
  var randomVerb = ranArray(Verbs);
  var randomAdjective = ranArray(Adjectives);
  var randomAnimal = ranArray(Animals);
  var randomPreposition = ranArray(Prepositions);

  var storyText = randomNoun + " " + randomVerb + " " + randomAdjective + " " + randomAnimal + " " + randomPreposition;
  speakNow(storyText);
});