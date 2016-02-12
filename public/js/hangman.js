


"use strict";

var Hangman = {
    words:            ['PIZZA','HOTDOG','APPLE','SANDWHICH', 'CHICKEN', 'PASTA', 'JELLO'], // Set of words for hangman to choose from
    currentWord:      '', // Current word for the game
    correctGuesses:   [], // Correct letters the user has guesses
    incorrectGuesses: [], // Wrong letters the user has guessed
    maxGuesses:        7, // Maximum number of wrong guesses the user is allowed

    /**
     * Do all the initial game setup, register any necessary event listeners.
     * This method should only be run once.
     */
    init: function() {
        console.log("init")
        $(".new-game").click(function(){
            Hangman.gameStart();
        });

        $(".letter").click(this.keyClickHandler);

        this.pickWord();

    },
    // end bracket for .click function

    

    /**
     * Start a new game. Should be used whenever a new hangman game is begun.
     */
    gameStart: function() {
        console.log("A New Game Has Started!")

        this.pickWord();

    },

    /**
     * Pick a new random word and assign it to the currentWord property
     */
    pickWord: function() {
        var arrayLength = this.words.length;
        var index = this.getRandomInt(0,arrayLength-1);
        this.currentWord = this.words[index];
        console.log("The selected word is " + this.currentWord);
},

    /**
     * The game has finished. Use this method at the end of the game if necessary
     * to remove things like event listeners or display a "New Game" button.
     */
    gameEnd: function() {

    },

    /**
     * Event handler for when a keyboard key is pressed.
     *
     * @param Event event - JavaScript event object
     */
    keyClickHandler: function(event) {
        var clickedLetter = $(this).text();
        console.log();
        $(event.target).fadeOut(700);
        console.log("keyClickHandler Fired!");
        if(Hangman.incorrectGuesses.length >= Hangman.maxGuesses){
            alert("you've lost");
        }

        if(Hangman.isLetterInWord('.letter')){

            Hangman.addCorrectGuess('.letter');
            Hangman.findLetterInWord('.letter');
        } else{
            Hangman.addIncorrectGuess('.letter');
        }      
        console.log('')
        var displayLetter = "<div class='letterbox'>" + clickedLetter + "</div>";
        $('.wordbox').append(displayLetter);
        $(clickedLetter).css({ 'display': "block" });

        console.log('.letter');
    },

    /**
     * Random number generator, should return an integer between min and max.
     *
     * @param integer min
     * @param integer max
     *
     * @return integer
     */
    getRandomInt: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;

    },

    /**
     * Check if the user has guessed a given letter before (either right or wrong).
     *
     * @param string letter - Letter the user typed
     *
     * @return boolean
     */
    hasLetterBeenGuessed: function(letter) {
        console.log("hasLetterBeenGuessed");
        var combinedArray = this.correctGuesses.concat(this.incorrectGuesses);

        if(combinedArray.indexOf('.letter') >= 0)
        {
            console.log('letter');
            return true;
        } else {
            return false;
        }
    },

    /**
     * Return whether or not a letter is in the current word.
     *
     * @param string letter - Letter the user typed
     *
     * @return boolean
     */
    isLetterInWord: function(letter) {
        console.log("isLetterInWord");
        var isInLetterInt = this.currentWord.indexOf('.letter');
        if(isInLetterInt >= 0){
            return true;
        } else {
            return false;
        }
        console.log(isInLetterInt);
    },

    /**
     * Return the indexes where a given letter occurs in the current word
     * For example, if the word is "banana", and the letter passed was "a"
     * then this function should return [1, 3, 5]. If the letter passed was
     * "b" then the function should return [0]. If the letter was "q" then
     * it should return [].
     *
     * @param string letter - Letter the user typed
     *
     * @return array - Array of indexes in the word
     */
    findLetterInWord: function(letter) {
        console.log("findLetterInWord");
        var result = [];
        var wordArray = this.currentWord.split("");
        wordArray.forEach(function(lchar, index){
        if(lchar=='.letter'){
            result.push(index);
            }
        });
        return result;

    },

    /**
     * Add a letter to the array of correct guesses and handle any additional steps
     *
     * @param string letter - Letter the user typed
     */
    addCorrectGuess: function(letter) {
        this.correctGuesses.push('.letter');
        console.log("addCorrectGuess");


    },

    /**
     * Add a letter to the array of incorrect guesses and handle any additional steps
     *
     * @param string letter - Letter the user typed
     */
    addIncorrectGuess: function(letter) {
        console.log("addIncorrectGuess");
        this.incorrectGuesses.push('.letter');

    },

    /**
     * Check whether all the letters in the word have been guessed
     *
     * @return boolean
     */
    isGameWon: function() {
        console.log("isGameWon");
    }
};

Hangman.init();
