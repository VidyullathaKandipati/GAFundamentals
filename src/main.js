

var gameBoard = document.getElementById('game-board');
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var isMatch = function(x)
{
	if (x[0] === x[1])
	 {
	 	alert("You found a match.");
	 }
	 else
	 {
	 	alert("Sorry, try again");
	 }
}

var isTwoCards = function()
{
	var data = this.getAttribute('data-card');
	cardsInPlay.push(data);
	if ( data === "king")
	{
		this.innerHTML = '<img src="king.png" alt="KingImage">';
	}
	else
	{
		this.innerHTML = '<img src="queen.png" alt="QueenImage">';
	}

	if (cardsInPlay.length === 2)
	{
		isMatch(cardsInPlay);
		cardsInPlay = [];
		for ( var i = 0; i < cards.length; i++)
		{
			var cardElement = document.getElementsByClassName('card')[i];
			cardElement.innerHTML = "";
		}
	}
}

var createBoard = function()
{
	for (var i = 0; i < cards.length; i += 1)
	{
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		gameBoard.appendChild(cardElement);
	}
}

createBoard();