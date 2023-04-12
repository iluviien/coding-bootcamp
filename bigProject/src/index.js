document.addEventListener("DOMContentLoaded", () => {
  //card options

  const cardArray = [
    {
      name: "froggy",
      img: "src/images/froggy.jpg"
    },
    {
      name: "pizza",
      img: "src/images/pizza.jpg"
    },
    {
      name: "lolli",
      img: "src/images/lolli.jpg"
    },
    {
      name: "happy",
      img: "src/images/happy.jpg"
    },
    {
      name: "angry",
      img: "src/images/angry.jpg"
    },

    {
      name: "cute",
      img: "src/images/cute.jpg"
    },
    {
      name: "froggy",
      img: "src/images/froggy.jpg"
    },
    {
      name: "pizza",
      img: "src/images/pizza.jpg"
    },
    {
      name: "lolli",
      img: "src/images/lolli.jpg"
    },
    {
      name: "happy",
      img: "src/images/happy.jpg"
    },
    {
      name: "angry",
      img: "src/images/angry.jpg"
    },

    {
      name: "cute",
      img: "src/images/cute.jpg"
    }
  ];

  cardArray.sort(() => 0.5 - Math.random());
  // console.log(cardArray);

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenIds = [];
  let cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "src/images/cardback.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  function flipCard() {
    let cardId = this.getAttribute("data-id");

    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    if (cardsChosenIds[0] == cardsChosenIds[1]) {
      alert("You have clicked the same image!");
      cards[optionOneId].setAttribute("src", "src/images/cardback.jpg");
      cards[optionTwoId].setAttribute("src", "src/images/cardback.jpg");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You have found a match!");
      cards[optionOneId].setAttribute("src", "src/images/white.jpg");
      cards[optionTwoId].setAttribute("src", "src/images/white.jpg");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "src/images/cardback.jpg");
      cards[optionTwoId].setAttribute("src", "src/images/cardback.jpg");
      alert("Sorry, try again!😒");
    }
    cardsChosen = [];
    cardsChosenIds = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations, you have won! 😊";
    }
  }
  createBoard();
});
